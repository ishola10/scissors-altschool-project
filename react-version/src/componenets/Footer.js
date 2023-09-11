import "../App.css";
import Scissorslogo from "../images/scissorslogo.png";
import Group2 from "../images/Group 2.png";
import Twitter from "../images/twitter.png";
import Svgfeather from "../images/svg.feather.png";
import Linkeedin from "../images/linkeedin.png";
import Faceboook from "../images/faceboook.png";

function Footer() {
  return (
    <footer>
      <div
        style={{
          position: "absolute",
          alignItems: "end",
          marginLeft: "53%",
        }}
      >
        <img src={Group2} height="358vh" alt="" />
      </div>
      <div className="footer">
        <div id="footer">
          <div className="footer-con1">
            <div style={{ display: "flex" }}>
              <img src={Scissorslogo} alt="" />
              <div>
                <h2>|SCISSOR</h2>
              </div>
            </div>
            <div className="social-media">
              <img src={Twitter} alt="" />
              <img src={Svgfeather} alt="" />
              <img src={Linkeedin} alt="" />
              <img src={Faceboook} alt="" />
            </div>
          </div>
          <div className="footer-con2">
            <h1 className="links">Why Scissor ?</h1>
            <p>Scissor 101</p>
            <p>Integrations &amp; API</p>
            <p>Pricing</p>
          </div>
          <div className="footer-con3">
            <h1 className="links">Solutions</h1>
            <p>Social Media</p>
            <p>Digital Marketing</p>
            <p>Customer Service</p>
            <p>For Developers</p>
          </div>
          <div className="footer-con4">
            <h1 className="links">Products</h1>
            <p>Link Management</p>
            <p>QR Codes</p>
            <p>Link-in-bio</p>
          </div>
          <div className="footer-con5">
            <h1 className="links">Company</h1>
            <p>About Scissor</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Reviews</p>
          </div>
        </div>
        <div id="footerr">
          <div className="footer-con5">
            <h1 className="links">Resources</h1>
            <p>Blog</p>
            <p>Resource Library</p>
            <p>Developers</p>
            <p>App Connectors</p>
            <p>Support</p>
            <p>TrustCenter</p>
            <p>Browser Extension</p>
            <p>Mobile App</p>
          </div>
          <div className="footer-con5">
            <h1 className="links">Features</h1>
            <p>Branded Links</p>
            <p>Mobile Links</p>
            <p>Campaign</p>
            <p>Management &amp;</p>
            <p>Analytics</p>
            <p>QRCode generation</p>
          </div>
          <div className="footer-con5">
            <h1 className="links">Legal</h1>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms of Service</p>
            <p>Acceptable Use Policy</p>
            <p>Code of Conduct</p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          alignItems: "end",
          marginLeft: "53%",
        }}
      >
        <img src={Group2} height="358vh" alt="" />
      </div>
      <p
        style={{
          position: "absolute",
          marginTop: "20%",
          marginLeft: "80%",
          padding: "50px 1px 1px 1px",
          fontSize: 10,
        }}
      >
        Term of Service | Security | © Scissor 2023
      </p>
    </footer>
  );
}

export default Footer;
