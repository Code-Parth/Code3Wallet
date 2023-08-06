// Import necessary modules and components
import "./App.css"; // Import the CSS file for styling
import { useState } from "react"; // Import the useState hook from React to manage component state
import logo from "./code3wallet.svg"; // Import an SVG image as the logo
import { Select } from "antd"; // Import the Select component from Ant Design library
import { Routes, Route } from "react-router-dom"; // Import the Routes and Route components from React Router DOM
import Home from "./components/Home"; // Import the Home component from the "components" folder
import CreateAccount from "./components/CreateAccount"; // Import the CreateAccount component from the "components" folder
import RecoverAccount from "./components/RecoverAccount"; // Import the RecoverAccount component from the "components" folder
import WalletView from "./components/WalletView"; // Import the WalletView component from the "components" folder

function App() {
  // State variables using useState hook
  const [wallet, setWallet] = useState(null); // State to hold wallet data
  const [seedPhrase, setSeedPhrase] = useState(null); // State to hold the seed phrase for account recovery
  const [selectedChain, setSelectedChain] = useState("0x1"); // State to track the selected blockchain chain

  return (
    <div className="App">
      <header>
        {/* Render the logo image */}
        <img src={logo} className="headerLogo" alt="logo" />
        {/* Render a dropdown to select the blockchain chain */}
        <Select
          onChange={(val) => setSelectedChain(val)} // Handle the selection change and update the selected chain state
          value={selectedChain} // Set the selected value based on the state
          options={[
            {
              label: "Ethereum",
              value: "0x1",
            },
            {
              label: "Mumbai Testnet",
              value: "0x13881",
            },
          ]}
          className="dropdown" // Apply a CSS class for styling
        ></Select>
      </header>

      {/* Conditional rendering based on the existence of wallet and seedPhrase */}
      {wallet && seedPhrase ? (
        // If wallet and seedPhrase exist, render the Routes component for specific routes
        <Routes>
          {/* Render WalletView component for "/yourwallet" route */}
          <Route
            path="/yourwallet"
            element={
              <WalletView
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            }
          />
        </Routes>
      ) : (
        // If wallet and seedPhrase do not exist, render the Routes component for other routes
        <Routes>
          {/* Render Home component for "/" route */}
          <Route path="/" element={<Home />} />
          {/* Render RecoverAccount component for "/recover" route */}
          <Route
            path="/recover"
            element={
              <RecoverAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
          {/* Render CreateAccount component for "/yourwallet" route */}
          <Route
            path="/yourwallet"
            element={
              <CreateAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
