import "../App.css";
import Line70 from "../images/Line 70.png";
import CheckCircle from "../images/check-circle.png";
import CheckCircle1 from "../images/check-circle (1).png";

function Pricing() {
  return (
    <>
      <section className="part6">
        <div id="part6">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Line70} alt="" />
            <h1 style={{ fontSize: 40 }}>
              A <strong style={{ color: "#0065fe" }}>price perfect</strong> for
              your needs.
            </h1>
          </div>
          <p style={{ textAlign: "center" }}>
            From catering for your personal, business, event, socials needs, you
            can be <br />
            rest assured we have you in mind in our pricing.
          </p>
        </div>
        <div className="boxes">
          <div className="box1">
            <h1 style={{ fontSize: 24, marginTop: "5%" }}>Basic</h1>
            <h1 style={{ fontSize: 30, margin: "2% 0 1% 0" }}>Free</h1>
            <p style={{ fontSize: 16, fontWeight: "bolder" }}>
              Free plan for all users
            </p>
            <span>
              <div style={{ display: "flex", margin: "3% 0", gap: "1%" }}>
                <img src={CheckCircle} alt="" />
                <p>Unlimited URL Shortening</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "1%" }}>
                <img src={CheckCircle} alt="" />
                <p>Basic Link Analytics</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "1%" }}>
                <img src={CheckCircle} alt="" />
                <p>Customizable Short Links</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "1%" }}>
                <img src={CheckCircle} alt="" />
                <p>Standard Support</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "1%" }}>
                <img src={CheckCircle} alt="" />
                <p>Ad-supported</p>
              </div>
            </span>
          </div>
          <div className="box3">
            <h1 style={{ fontSize: 24 }}>Teams</h1>
            <h1 style={{ fontSize: 30, margin: "6% 0 1% 0" }}>$25/month</h1>
            <p
              style={{
                fontSize: 16,
                fontWeight: "bolder",
                marginTop: "3%",
              }}
            >
              Share with up to 10 users
            </p>
            <div style={{ display: "flex", margin: "6% 0", gap: "2%" }}>
              <img src={CheckCircle} alt="" />
              <p>Team Collaboration</p>
            </div>
            <div style={{ display: "flex", margin: "6% 0", gap: "2%" }}>
              <img src={CheckCircle} alt="" />
              <p>User Roles and Permissions</p>
            </div>
            <div style={{ display: "flex", margin: "6% 0", gap: "2%" }}>
              <img src={CheckCircle} alt="" />
              <p>Enhanced Security</p>
            </div>
            <div style={{ display: "flex", margin: "6% 0", gap: "2%" }}>
              <img src={CheckCircle} alt="" />
              <p>API Access</p>
            </div>
            <div style={{ display: "flex", margin: "6% 0", gap: "2%" }}>
              <img src={CheckCircle} alt="" />
              <p>Dedicated Account Manager</p>
            </div>
          </div>
          <div className="box2">
            <div style={{ margin: "15% 0 0 12%", color: "white" }}>
              <h1 style={{ fontSize: 24 }}>Professional</h1>
              <h1 style={{ fontSize: 40, margin: "6% 0 1% 0" }}>$15/month</h1>
              <p style={{ fontSize: 20, marginTop: "6% 0%" }}>
                Ideal for business creators
              </p>
              <div style={{ display: "flex", margin: "3% 0", gap: "2%" }}>
                <img src={CheckCircle1} alt="" />
                <p>Enhanced Link Analytics</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "2%" }}>
                <img src={CheckCircle1} alt="" />
                <p>Custom Branded Domains</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "2%" }}>
                <img src={CheckCircle1} alt="" />
                <p>Advanced Link Customization</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "2%" }}>
                <img src={CheckCircle1} alt="" />
                <p>Priority Support</p>
              </div>
              <div style={{ display: "flex", margin: "3% 0", gap: "2%" }}>
                <img src={CheckCircle1} alt="" />
                <p>Ad-free Experience</p>
              </div>
            </div>
          </div>
        </div>
        <nav style={{ textAlign: "center", margin: "3% 0" }}>
          <button
            style={{
              color: "#0065fe",
              backgroundColor: "white",
              border: "1px solid #0065fe",
            }}
          >
            Get Custom Pricing
          </button>
          <button>Select Pricing</button>
        </nav>
      </section>
    </>
  );
}

export default Pricing;
