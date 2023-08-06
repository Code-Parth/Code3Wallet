// Import necessary modules, components, and functions
import React from "react"; // Import the React library
import { Button, Card } from "antd"; // Import the Button and Card components from Ant Design library
import { ExclamationCircleOutlined } from "@ant-design/icons"; // Import the ExclamationCircleOutlined icon from Ant Design Icons
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router DOM
import { useState } from "react"; // Import the useState hook from React
import { ethers } from "ethers"; // Import the ethers library for Ethereum-related operations

function CreateAccount({ setWallet, setSeedPhrase }) {
  // State variables using useState hook
  const [newSeedPhrase, setNewSeedPhrase] = useState(null); // State to hold the newly generated seed phrase
  const navigate = useNavigate(); // Function to navigate to different routes

  // Function to generate a new wallet and seed phrase
  function generateWallet() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase; // Generate a random mnemonic (seed phrase)
    setNewSeedPhrase(mnemonic); // Set the new seed phrase in the state
  }

  // Function to set the wallet and seed phrase in the parent component
  function setWalletAndMnemonic() {
    setSeedPhrase(newSeedPhrase); // Set the seed phrase in the parent component using the setSeedPhrase function
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address); // Set the wallet address in the parent component using the setWallet function
  }

  return (
    <>
      {/* Render the content */}
      <div className="content">
        {/* Display a warning about saving the seed phrase securely */}
        <div className="mnemonic">
          <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
          <div>
            Once you generate the seed phrase, save it securely in order to
            recover your wallet in the future.
          </div>
        </div>

        {/* Render a button to generate a new seed phrase */}
        <Button
          className="frontPageButton"
          type="primary"
          onClick={() => generateWallet()}
        >
          Generate Seed Phrase
        </Button>

        {/* Render a card to display the newly generated seed phrase */}
        <Card className="seedPhraseContainer">
          {/* Display the seed phrase only if it exists */}
          {newSeedPhrase && (
            <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>
          )}
        </Card>

        {/* Render a button to open the new wallet */}
        <Button
          className="frontPageButton"
          type="default"
          onClick={() => setWalletAndMnemonic()}
        >
          Open Your New Wallet
        </Button>

        {/* Render a link to navigate back to the home page */}
        <p className="frontPageBottom" onClick={() => navigate("/")}>
          Back Home
        </p>
      </div>
    </>
  );
}

export default CreateAccount;
