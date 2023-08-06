// Import the ReportHandler interface from "web-vitals" module
import { ReportHandler } from "web-vitals";

// Define a function called reportWebVitals, which takes an optional onPerfEntry callback function
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // Check if the onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // If the onPerfEntry callback is provided and is a function, perform the following steps asynchronously

    // Dynamically import the "web-vitals" module
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // When the "web-vitals" module is loaded, destructure its functions: getCLS, getFID, getFCP, getLCP, getTTFB

      // Call the getCLS function with the onPerfEntry callback function
      getCLS(onPerfEntry);

      // Call the getFID function with the onPerfEntry callback function
      getFID(onPerfEntry);

      // Call the getFCP function with the onPerfEntry callback function
      getFCP(onPerfEntry);

      // Call the getLCP function with the onPerfEntry callback function
      getLCP(onPerfEntry);

      // Call the getTTFB function with the onPerfEntry callback function
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
