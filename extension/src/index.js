// Import necessary modules and components from the React library and other files
import React from "react"; // Import the React library
import ReactDOM from "react-dom/client"; // Import the ReactDOM library to render the React component into the DOM
import "./index.css"; // Import the CSS file for styling
import App from "./App"; // Import the App component from the "App.js" file
import { MemoryRouter } from "react-router-dom"; // Import the MemoryRouter component from React Router DOM

// Create a React root and render the App component into it
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root instance using ReactDOM.createRoot() method

// Render the App component wrapped in React.StrictMode and MemoryRouter
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
