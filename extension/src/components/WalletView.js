// Import necessary modules, components, and libraries
import React, { useEffect, useState } from "react"; // Import the React library and hooks
import {
  Divider,
  Tooltip,
  List,
  Avatar,
  Spin,
  Tabs,
  Input,
  Button,
} from "antd"; // Import various components from Ant Design library
import { LogoutOutlined } from "@ant-design/icons"; // Import the LogoutOutlined icon from Ant Design Icons
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router DOM
import logo from "../noImg.png"; // Import an image named "noImg.png"
import axios from "axios"; // Import the Axios library for making HTTP requests
import { CHAINS_CONFIG } from "../chains"; // Import the CHAINS_CONFIG object containing chain configurations
import { ethers } from "ethers"; // Import the ethers library for Ethereum-related operations

const { TextArea } = Input; // Destructure the TextArea component from Ant Design

function WalletView({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
  selectedChain,
}) {
  // State variables using useState hook
  const navigate = useNavigate(); // Function to navigate to different routes
  const [tokens, setTokens] = useState(null); // State to hold the user's tokens
  const [nfts, setNfts] = useState(null); // State to hold the user's NFTs
  const [balance, setBalance] = useState(0); // State to hold the user's balance
  const [fetching, setFetching] = useState(true); // State to track if data is being fetched
  const [amountToSend, setAmountToSend] = useState(null); // State to hold the amount to send in a transaction
  const [sendToAddress, setSendToAddress] = useState(null); // State to hold the recipient address for a transaction
  const [processing, setProcessing] = useState(false); // State to track if a transaction is being processed
  const [hash, setHash] = useState(null); // State to hold the transaction hash

  // Tab items for displaying different sections in the WalletView
  const items = [
    {
      key: "3",
      label: `Tokens`,
      children: (
        // Display user's tokens in a List component
        <>
          {tokens ? (
            <>
              <List
                bordered
                itemLayout="horizontal"
                dataSource={tokens}
                renderItem={(item, index) => (
                  <List.Item style={{ textAlign: "left" }}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.logo || logo} />}
                      title={item.symbol}
                      description={item.name}
                    />
                    <div>
                      {(
                        Number(item.balance) /
                        10 ** Number(item.decimals)
                      ).toFixed(2)}{" "}
                      Tokens
                    </div>
                  </List.Item>
                )}
              />
            </>
          ) : (
            // If the user has no tokens, display a message
            <>
              <span>You seem to not have any tokens yet</span>
              <p className="frontPageBottom">
                Website:{" "}
                <a href="https://code3wallet.vercel.app/" target="_blank" rel="noreferrer">
                  Code3Wallet
                </a>
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: `NFTs`,
      children: (
        // Display user's NFTs as images
        <>
          {nfts ? (
            <>
              {nfts.map((e, i) => {
                return (
                  <>
                    {e && (
                      <img
                        key={i}
                        className="nftImage"
                        alt="nftImage"
                        src={e}
                      />
                    )}
                  </>
                );
              })}
            </>
          ) : (
            // If the user has no NFTs, display a message
            <>
              <span>You seem to not have any NFTs yet</span>
              <p className="frontPageBottom">
                Website:{" "}
                <a href="https://code3wallet.vercel.app/" target="_blank" rel="noreferrer">
                  Code3Wallet
                </a>
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: "1",
      label: `Transfer`,
      children: (
        // Display a form for transferring tokens
        <>
          <h3>Native Balance </h3>
          <h1>
            {balance.toFixed(2)} {CHAINS_CONFIG[selectedChain].ticker}
          </h1>
          <div className="sendRow">
            <p style={{ width: "90px", textAlign: "left" }}> To:</p>
            <Input
              value={sendToAddress}
              onChange={(e) => setSendToAddress(e.target.value)}
              placeholder="0x..."
            />
          </div>
          <div className="sendRow">
            <p style={{ width: "90px", textAlign: "left" }}> Amount:</p>
            <Input
              value={amountToSend}
              onChange={(e) => setAmountToSend(e.target.value)}
              placeholder="Native tokens you wish to send..."
            />
          </div>
          <Button
            style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
            type="primary"
            onClick={() => sendTransaction(sendToAddress, amountToSend)}
          >
            Send Tokens
          </Button>
          {processing && (
            // Display a loading spinner and transaction hash if processing a transaction
            <>
              <Spin />
              {hash && (
                <Tooltip title={hash}>
                  <p>Hover For Tx Hash</p>
                </Tooltip>
              )}
            </>
          )}
        </>
      ),
    },
  ];

  // Function to send a transaction
  async function sendTransaction(to, amount) {
    const chain = CHAINS_CONFIG[selectedChain]; // Get the selected chain configuration

    const provider = new ethers.JsonRpcProvider(chain.rpcUrl); // Create a JSON-RPC provider with the chain's URL

    const privateKey = ethers.Wallet.fromPhrase(seedPhrase).privateKey; // Generate a private key from the seed phrase

    const wallet = new ethers.Wallet(privateKey, provider); // Create a new wallet instance with the private key and provider

    const tx = {
      to: to,
      value: ethers.parseEther(amount.toString()), // Convert the amount to send to Wei (the smallest unit of Ether)
    };

    setProcessing(true); // Set processing state to true to show the loading spinner
    try {
      const transaction = await wallet.sendTransaction(tx); // Send the transaction

      setHash(transaction.hash); // Set the transaction hash to display
      const receipt = await transaction.wait(); // Wait for the transaction to be mined

      setHash(null);
      setProcessing(false); // Set processing state to false after the transaction is done
      setAmountToSend(null); // Clear the input field for the amount to send
      setSendToAddress(null); // Clear the input field for the recipient address

      if (receipt.status === 1) {
        getAccountTokens(); // If the transaction is successful, update the user's token list
      } else {
        console.log("failed");
      }
    } catch (err) {
      setHash(null);
      setProcessing(false); // Set processing state to false if there's an error in the transaction
      setAmountToSend(null);
      setSendToAddress(null);
    }
  }

  // Function to get the user's tokens and NFTs from the backend API
  async function getAccountTokens() {
    setFetching(true); // Set fetching state to true to show the loading spinner

    const res = await axios.get(`https://code3wallet-backend.onrender.com/getTokens`, {
      params: {
        userAddress: wallet, // Pass the user's wallet address to the backend API
        chain: selectedChain, // Pass the selected chain ID to the backend API
      },
    });

    const response = res.data;

    if (response.tokens.length > 0) {
      setTokens(response.tokens); // Set the user's tokens if available
    }

    if (response.nfts.length > 0) {
      setNfts(response.nfts); // Set the user's NFTs if available
    }

    setBalance(response.balance); // Set the user's balance
    setFetching(false); // Set fetching state to false after data retrieval
  }

  // Function to handle user logout
  function logout() {
    setSeedPhrase(null); // Clear the seed phrase from the state
    setWallet(null); // Clear the wallet address from the state
    setNfts(null); // Clear the NFTs from the state
    setTokens(null); // Clear the tokens from the state
    setBalance(0); // Reset the balance to zero
    navigate("/"); // Navigate back to the home page
  }

  // Effect to fetch user's tokens and NFTs on initial component mount
  useEffect(() => {
    if (!wallet || !selectedChain) return; // If wallet or selectedChain is not available, do nothing
    setNfts(null);
    setTokens(null);
    setBalance(0);
    getAccountTokens(); // Fetch user's tokens and NFTs
  }, []);

  // Effect to fetch user's tokens and NFTs when the selected chain changes
  useEffect(() => {
    if (!wallet) return; // If wallet is not available, do nothing
    setNfts(null);
    setTokens(null);
    setBalance(0);
    getAccountTokens(); // Fetch user's tokens and NFTs for the new selected chain
  }, [selectedChain]);

  return (
    <>
      {/* Render the content */}
      <div className="content">
        <div className="logoutButton" onClick={logout}>
          <LogoutOutlined />
        </div>
        <div className="walletName">Wallet</div>

        {/* Display user's wallet address with tooltip */}
        <Tooltip title={wallet}>
          <div>
            {wallet.slice(0, 4)}...{wallet.slice(38)}
          </div>
        </Tooltip>
        <Divider />

        {/* Display loading spinner while fetching data, or render the tabs with the user's tokens, NFTs, and transaction form */}
        {fetching ? (
          <Spin />
        ) : (
          <Tabs defaultActiveKey="1" items={items} className="walletView" />
        )}
      </div>
    </>
  );
}

export default WalletView;
