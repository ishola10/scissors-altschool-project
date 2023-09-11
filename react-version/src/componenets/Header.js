import "../App.css";
import Scissorslogo from "../images/scissorslogo.png";
import Downarrow from "../images/downarrow.png";

function Header() {
  return (
    <header>
      <div className="head">
        <div className="headp1">
          <img style={{ height: "4vh" }} src={Scissorslogo} alt="" />
          <h2 style={{ color: "#0065fe" }}>|SCISSOR</h2>
        </div>
        <div className="headp2">
          <h3 style={{ color: "#0065fe" }}>My URLs</h3>
          <span style={{ display: "flex", gap: "1.5%" }}>
            <h3>Features</h3>
            <img
              style={{ marginTop: "14.5%" }}
              height="7vh"
              src={Downarrow}
              alt=""
            />
          </span>
          <h3>Pricing</h3>
          <h3>Analytics</h3>
          <h3>FAQS</h3>
        </div>
        <div className="headp3">
          <h2 style={{ color: "#0065fe" }}>Log in</h2>
          <button>Try for free</button>
          {/* nn */}
        </div>
      </div>
    </header>
  );
}

export default Header;
