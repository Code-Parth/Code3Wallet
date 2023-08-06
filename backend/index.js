// Import required modules and packages
const express = require("express"); // Express.js framework for building APIs
const Moralis = require("moralis").default; // Moralis SDK for interacting with the Moralis backend service
const app = express(); // Create an instance of the Express app
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)
require("dotenv").config(); // Load environment variables from a .env file
const port = 5000; // Port on which the server will listen for incoming API requests

// Enable CORS and parse JSON requests
app.use(cors());
app.use(express.json());

// Define an API endpoint for handling GET requests to "/getTokens"
app.get("/getTokens", async (req, res) => {
  // Extract userAddress and chain from the request query parameters
  const { userAddress, chain } = req.query;

  // Get wallet token balances for the specified user address and chain using the Moralis SDK
  const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain: chain,
    address: userAddress,
  });

  // Get wallet NFTs (Non-fungible tokens) for the specified user address and chain using the Moralis SDK
  const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: chain,
    address: userAddress,
    mediaItems: true,
  });

  // Filter and extract only the high-resolution media URLs for NFTs that are not flagged as possible spam and are not videos
  const myNfts = nfts.raw.result.map((e, i) => {
    if (e?.media?.media_collection?.high?.url && !e.possible_spam && (e?.media?.category !== "video")) {
      return e["media"]["media_collection"]["high"]["url"];
    }
  });

  // Get the native balance of the user's wallet for the specified chain using the Moralis SDK
  const balance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: chain,
    address: userAddress
  });

  // Prepare a JSON response containing the tokens, NFTs, and wallet balance for the user
  const jsonResponse = {
    tokens: tokens.raw,
    nfts: myNfts,
    balance: balance.raw.balance / (10 ** 18) // Convert the balance to the appropriate units (e.g., from wei to ether)
  };

  // Send the JSON response to the client with a 200 status code (OK)
  return res.status(200).json(jsonResponse);
});

// Start the Moralis SDK with the provided API key and then start the server to listen for incoming API calls
Moralis.start({
  apiKey: process.env.MORALIS_KEY, // Set the Moralis API key using the environment variable
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`); // Log a message indicating that the server is listening on the specified port
  });
});
