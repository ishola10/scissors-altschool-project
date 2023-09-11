import "./App.css";
import Downarrow from "./images/downarrow.png";
import Frame1000001716 from "./images/Frame 1000001716.png";
import Group2 from "./images/Group 2.png";
import Group3 from "./images/Group 3.png";
import Group31 from "./images/Group 3 (1).png";
import Line70 from "./images/Line 70.png";
import Minus from "./images/minus.png";
import Plus from "./images/plus.png";
import Slash from "./images/slash.png";
import Vector2 from "./images/Vector 2.png";
import Header from "./componenets/Header";
import Review from "./componenets/Review";
import Footer from "./componenets/Footer";
import Pricing from "./componenets/Pricing";
import Form from "./componenets/Form";

function Optimize() {
  return (
    <>
      <section className="part9">
        <div style={{ position: "absolute" }}>
          <img src={Group31} height="265vh" alt="" />
        </div>
        <div className="optimization">
          <h1
            style={{
              fontSize: 30,
              fontWeight: "bolder",
              color: "white",
              paddingBottom: "4%",
            }}
          >
            Revolutionizing link optimization
          </h1>
          <button style={{ marginLeft: "25%", borderRadius: 24 }}>
            Get Started
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            alignItems: "end",
            marginLeft: "59.2%",
            marginTop: "-3%",
          }}
        >
          <img src={Group2} height="310vh" alt="" />
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-bold"
          rel="stylesheet"
        />
        <Header />
        <main>
          <div className="all">
            <section className="part1">
              <p
                style={{
                  width: 948,
                  fontSize: 48,
                  textAlign: "center",
                  margin: "0% auto",
                  padding: "4% 0 0 0",
                }}
              >
                Optimize Your Online Experience with Our <br />
                <br />
                Advanced
                <strong style={{ color: "#0065fe" }}>
                  URL Shortening
                </strong>{" "}
                Solution
              </p>
              <div style={{ textAlign: "center" }}>
                <img src={Slash} alt="" />
              </div>
              <p
                style={{
                  width: 781,
                  height: 105,
                  fontFamily: '"Gilroy-Medium"',
                  fontSize: 18,
                  textAlign: "center",
                  margin: "0% auto",
                }}
              >
                Personalize your shortened URLs to align with your brand
                identity. Utilize custom slugs, <br />
                branded links, and domain customization options to reinforce
                your brand presence and <br />
                enhance user engagement.
              </p>
              <nav id="part1">
                <button>Sign Up</button>
                <p style={{ color: "#0065fe" }}>Learn more</p>
              </nav>
            </section>
            <section className="part2">
              <img
                style={{
                  position: "relative",
                  left: 300,
                  marginTop: "-2%",
                  marginRight: "-8%",
                }}
                src={Vector2}
                alt=""
              />
              <span id="part2">
                <img src={Frame1000001716} alt="" />
                <p style={{ textAlign: "center", justifyContent: "center" }}>
                  Seamlessly transform your long URLs into concise <br />
                  and shareable links with just few clicks.
                </p>
              </span>
            </section>
            <section className="part3">
              <img width="100%" src={Group3} alt="" />
            </section>

            <Review />

            <Pricing />
            <Form />
            <section className="part8">
              <div>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2%",
                  }}
                >
                  <img src={Line70} alt="" />
                  <h1 style={{ fontSize: 40 }}>FAQs</h1>
                </span>
                <div className="faq-content">
                  <span style={{ display: "flex", gap: "38%" }}>
                    <h2 style={{ fontSize: 16 }}>
                      How does URL shortening work?
                    </h2>
                    <img
                      style={{ marginTop: "0.95%" }}
                      src={Minus}
                      height="2vh"
                      alt=""
                    />
                  </span>
                  <p style={{ fontSize: "x-small", fontWeight: "bolder" }}>
                    URL shortening works by taking a long URL and creating a
                    shorter, condensed version that redirects to the <br />
                    original URL. When a user clicks on the shortened link, they
                    are redirected to the intended destination.
                  </p>
                  <span
                    style={{ display: "flex", gap: "9.6%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      Is it necessary to create an account to use the URL
                      shortening service?
                    </h2>
                    <img src={Plus} alt="" />
                  </span>
                  <span
                    style={{ display: "flex", gap: "22.5%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      Are the shortened links permanent? Will they expire?
                    </h2>
                    <img src={Plus} alt="" />
                  </span>
                  <span
                    style={{ display: "flex", gap: "15.8%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      Are there any limitations on the number of URLs I can
                      shorten?
                    </h2>
                    <img src={Plus} alt="" />
                  </span>
                  <span style={{ display: "flex", gap: "12%", margin: "3% 0" }}>
                    <h2 style={{ fontSize: 16 }}>
                      Can I customize the shortened URLs to reflect my brand or
                      content?
                    </h2>
                    <img src={Plus} alt="" />
                  </span>
                  <span
                    style={{ display: "flex", gap: "23.7%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      Can I track the performance of my shortened URLs?
                    </h2>
                    <img src={Plus} alt="" />
                  </span>
                  <span
                    style={{ display: "flex", gap: "5.9%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      How secure is the URL shortening service? Are the
                      shortened links protected <br />
                      against spam or malicious activity?
                    </h2>
                    <img src={Plus} height="25vh" alt="" />
                  </span>
                  <span
                    style={{ display: "flex", gap: "32.6%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      What is a QR code and what can it do?
                    </h2>
                    <img src={Plus} alt="" />
                  </span>
                  <span
                    style={{ display: "flex", gap: "3.4%", margin: "3% 0" }}
                  >
                    <h2 style={{ fontSize: 16 }}>
                      Is there an API available for integrating the URL
                      shortening service into my own <br />
                      applications or websites?
                    </h2>
                    <img src={Plus} height="25vh" alt="" />
                  </span>
                </div>
              </div>
            </section>
            <Optimize />
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
