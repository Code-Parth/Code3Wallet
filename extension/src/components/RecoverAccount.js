// Import necessary modules, components, and functions
import React from "react"; // Import the React library
import { BulbOutlined } from "@ant-design/icons"; // Import the BulbOutlined icon from Ant Design Icons
import { Button, Input } from "antd"; // Import the Button and Input components from Ant Design library
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router DOM
import { useState } from "react"; // Import the useState hook from React
import { ethers } from "ethers"; // Import the ethers library for Ethereum-related operations

const { TextArea } = Input; // Destructure the TextArea component from Ant Design

function RecoverAccount({ setWallet, setSeedPhrase }) {
  // State variables using useState hook
  const navigate = useNavigate(); // Function to navigate to different routes
  const [typedSeed, setTypedSeed] = useState(""); // State to hold the typed seed phrase
  const [nonValid, setNonValid] = useState(false); // State to track whether the typed seed phrase is valid or not

  // Function to adjust the seed phrase and reset the nonValid state
  function seedAdjust(e) {
    setNonValid(false); // Reset the nonValid state to false
    setTypedSeed(e.target.value); // Update the typedSeed state with the typed value
  }

  // Function to recover the wallet using the typed seed phrase
  function recoverWallet() {
    let recoveredWallet;
    try {
      recoveredWallet = ethers.Wallet.fromPhrase(typedSeed); // Attempt to recover the wallet using ethers library
    } catch (err) {
      setNonValid(true); // Set the nonValid state to true if recovery fails (invalid seed phrase)
      return;
    }

    // If recovery is successful, set the seed phrase and wallet address in the parent component
    setSeedPhrase(typedSeed);
    setWallet(recoveredWallet.address);

    // Navigate to the "/yourwallet" route
    navigate("/yourwallet");
    return;
  }

  return (
    <>
      {/* Render the content */}
      <div className="content">
        {/* Display a warning and instructions */}
        <div className="mnemonic">
          <BulbOutlined style={{ fontSize: "20px" }} />
          <div>
            Type your seed phrase in the field below to recover your wallet (it
            should include 12 words separated with spaces)
          </div>
        </div>

        {/* Render a TextArea input for typing the seed phrase */}
        <TextArea
          value={typedSeed}
          onChange={seedAdjust}
          rows={4}
          className="seedPhraseContainer"
          placeholder="Type your seed phrase here..."
        />

        {/* Render a button to recover the wallet */}
        <Button
          disabled={
            typedSeed.split(" ").length !== 12 || typedSeed.slice(-1) === " "
          }
          className="frontPageButton"
          type="primary"
          onClick={() => recoverWallet()}
        >
          Recover Wallet
        </Button>

        {/* Render an error message if the seed phrase is invalid */}
        {nonValid && <p style={{ color: "red" }}> Invalid Seed Phrase</p>}

        {/* Render a link to navigate back to the home page */}
        <p className="frontPageBottom" onClick={() => navigate("/")}>
          <span>Back Home</span>
        </p>
      </div>
    </>
  );
}

export default RecoverAccount;
