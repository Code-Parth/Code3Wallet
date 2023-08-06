import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FinalDesign from "./components/FinalDesign";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();

  // Get the current location object containing pathname, search, and hash
  const location = useLocation();

  // Extract the pathname from the location object
  const pathname = location.pathname;

  // Scroll to the top of the page whenever the navigation action is not "POP"
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update the document title and meta description based on the current pathname
  useEffect(() => {
    // Initialize variables to store the title and meta description
    let title = "";
    let metaDescription = "";

    // Use a switch statement to set the title and meta description based on the pathname
    switch (pathname) {
      case "/":
        title = "Code3Wallet";
        metaDescription = "Welcome to our website!";
        break;
      // Add more cases for other pages as needed
      // case "/about":
      //   title = "About Us";
      //   metaDescription = "Learn more about our company.";
      //   break;
      // ...

      // If the pathname does not match any case, the title and meta description will remain empty
      default:
        break;
    }

    // Set the document title if a title is specified
    if (title) {
      document.title = title;
    }

    // Set the meta description if a metaDescription is specified
    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Return the JS for the App component
  return (
    <Routes>
      {/* Define a route for the root path that renders the FinalDesign component */}
      <Route path="/" element={<FinalDesign />} />
    </Routes>
  );
}

export default App;
