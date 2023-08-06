// Import necessary modules, components, and images
import React from "react"; // Import the React library
import code3wallet from "../code3wallet.png"; // Import an image named "code3wallet.png"
import { Button } from "antd"; // Import the Button component from Ant Design library
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router DOM

function Home() {
  const navigate = useNavigate(); // Function to navigate to different routes

  return (
    <>
      {/* Render the content */}
      <div className="content">
        {/* Render the logo image */}
        <img src={code3wallet} alt="logo" className="frontPageLogo" />

        {/* Render welcome messages */}
        <h2> Hey There 👋 </h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>

        {/* Render a button to create a new wallet */}
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>

        {/* Render a button to sign in with a seed phrase */}
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>

        {/* Render a link to the website (coming soon) */}
        <p className="frontPageBottom">
          Website:{" "}
          <a href="https://google.com/" target="_blank" rel="noreferrer">
            Coming soon
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
