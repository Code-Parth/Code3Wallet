// Import necessary dependencies and styles from the external CSS module.
import styles from "./FinalDesign.module.css";
import React from 'react';
import { Link } from 'react-router-dom';

// Define the FinalDesign functional component.
const FinalDesign = () => {
  return (
    // Start of the main container with a class name "finalDesign".
    <div className={styles.finalDesign}>
      {/* Home page section */}
      <div className={styles.homePage}>
        {/* Frame container */}
        <div className={styles.frame}>
          {/* Logo container */}
          <div className={styles.code3walletWrapper}>
            <b className={styles.code3wallet}>Code3Wallet</b>
          </div>
          {/* Various div elements for styling purposes */}
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          {/* Parent container for home navigation */}
          <div className={styles.homeParent}>
            <span className={styles.code3wallet}>Home</span>
            <span className={styles.code3wallet}>About Us</span>
            <span className={styles.code3wallet}>Contact</span>
          </div>
        </div>

        {/* Frame1 container */}
        <div className={styles.frame1}>
          {/* Parent container for main content */}
          <div className={styles.code3WalletParent}>
            {/* Title with "Code3" and "Wallet" */}
            <b className={styles.code3Wallet}>
              <span>Code3</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.wallet}>Wallet</span>
            </b>
            {/* Description of the app */}
            <div className={styles.welcomeToOur}>
              Welcome to our cutting-edge Crypto Web3 Wallet Extension your key
              to secure and seamless decentralized transactions. Manage your
              digital assets, interact with decentralized applications, and
              experience the future of finance, all in one user-friendly
              interface.
            </div>
            {/* Link to an external URL with a button */}
            <Link className={styles.frameWrapper} to="https://github.com/Code-Parth/Code3Wallet/releases/tag/V1.0.0/" target="_blank">
              <div className={styles.downloadNowParent}>
                <b className={styles.downloadNow}>Download Now</b>
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download.svg"
                />
              </div>
            </Link>
          </div>
          {/* Images */}
          <img className={styles.vectorIcon} alt="" src="/vector-187.svg" />
          <img
            className={styles.stackOfCryptocoinsTokens1Icon}
            alt=""
            src="/stackofcryptocoinstokens-1@2x.png"
          />
        </div>
      </div>

      {/* About Us page section */}
      <div className={styles.aboutMePage}>
        <div className={styles.frameItem} />
        <div className={styles.frame2}>
          {/* Title with "About" and "us" */}
          <b className={styles.aboutUs1}>
            <span>About</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.wallet}>us</span>
          </b>
          {/* Description of the team */}
          <div className={styles.weAreA}>
            we are a team of passionate blockchain enthusiasts on a mission to
            revolutionize the way you interact with cryptocurrencies. Our
            hackathon project is the culmination of countless hours of
            dedication, innovation, and collaboration. We believe in the power
            of decentralized technologies to empower individuals and reshape the
            financial landscape.
          </div>
          {/* Image */}
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>

      {/* Contact page section */}
      <div className={styles.aboutMePage}>
        <div className={styles.frameItem} />
        <div className={styles.contactPageItem} />
        <div className={styles.frame3}>
          {/* Form container */}
          <div className={styles.frameParent}>
            <form className={styles.frameGroup}>
              {/* Input field for email */}
              <div className={styles.frameContainer}>
                <div className={styles.yourEmailParent}>
                  <b className={styles.yourEmail}>Your email</b>
                  <input
                    className={styles.frameInput}
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* Input field for message */}
              <div className={styles.yourMessageParent}>
                <b className={styles.yourEmail}>Your Message</b>
                <div className={styles.messageWrapper}>
                  <b className={styles.message}>Message</b>
                </div>
              </div>
            </form>
            {/* Button for sending the message */}
            <button className={styles.sendMessageParent} >
              <b className={styles.downloadNow}>Send Message</b>
              <img className={styles.sendIcon} alt="" src="/send.svg" />
            </button>
          </div>
          {/* Title with "Contact" and "us" */}
          <b className={styles.contactUs}>
            <span>{`Contact `}</span>
            <span className={styles.wallet}>us</span>
          </b>
          {/* Description for contact */}
          <div className={styles.gotQuestionsOr}>
            Got questions or feedback? We'd love to hear from you! Feel free to
            reach out to us via the contact form below or drop us an email .
            Let's build the future of crypto together.
          </div>
          {/* Image */}
          <img className={styles.frameChild1} alt="" src="/vector-186.svg" />
        </div>
      </div>

      {/* Footer section */}
      <div className={styles.footerPage}>
        <div className={styles.footerPageChild} />
        {/* Footer navigation */}
        <div className={styles.frameDiv}>
          <div className={styles.homeGroup}>
            <img className={styles.homeIcon} alt="" src="/home.svg" />
            <div className={styles.code3wallet}>Home</div>
          </div>
          <div className={styles.homeGroup}>
            <img className={styles.homeIcon} alt="" src="/user.svg" />
            <div className={styles.code3wallet}>About us</div>
          </div>
          <div className={styles.homeGroup}>
            <img className={styles.homeIcon} alt="" src="/phone.svg" />
            <div className={styles.code3wallet}>Contact</div>
          </div>
        </div>
        {/* Social media icons */}
        <div className={styles.frameParent1}>
          <button className={styles.facebookWrapper} >
            <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
          </button>
          <button className={styles.facebookWrapper} >
            <div className={styles.frameChild2} />
            <img className={styles.frameChild3} alt="" src="/frame-26.svg" />
          </button>
          <button className={styles.facebookWrapper} >
            <div className={styles.frameChild2} />
            <img className={styles.frameChild3} alt="" src="/frame-261.svg" />
          </button>
          <button className={styles.facebookWrapper} >
            <img className={styles.facebookIcon} alt="" src="/youtube.svg" />
          </button>
        </div>
        {/* Terms of Service and Privacy Policy */}
        <div className={styles.termsOfServicePrivacyPolWrapper}>
          <div className={styles.code3wallet}>
            Terms of Service - Privacy Policy
          </div>
        </div>
        {/* Image */}
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
    </div>
  );
};

export default FinalDesign;
