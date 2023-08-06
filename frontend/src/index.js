// Import the necessary dependencies from React and other modules
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import the main component of the application
import reportWebVitals from "./reportWebVitals"; // Import a function for measuring performance
import { BrowserRouter } from "react-router-dom"; // Import the BrowserRouter to enable routing
import "./global.css"; // Import global CSS styles for the application

// Get the DOM container with the ID "root" where the application will be rendered
const container = document.getElementById("root");

// Create a root for the React application, allowing for concurrent rendering
const root = createRoot(container);

// Render the main application wrapped inside BrowserRouter, enabling routing functionality
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
