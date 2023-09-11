import "../App.css";
import Group31 from "../images/Group 3 (1).png";
import Group2 from "../images/Group 2.png";
import Downarrow from "../images/downarrow.png";

function Form() {
  return (
    <>
      <section className="part7">
        <div style={{ position: "absolute" }}>
          <img src={Group31} height="400vh" alt="" />
        </div>
        <div className="form-content">
          <form action="#">
            <input
              style={{ width: "104%", margin: "4% 0" }}
              type="text"
              name="url"
              id="url"
              placeholder="Paste URL here..."
            />
            <div
              style={{
                display: "flex",
                gap: "2%",
                width: "104%",
                margin: "3% 0",
              }}
            >
              <span className="domain">
                <p>choose Domain</p>
                <img
                  style={{ marginTop: "5%" }}
                  src={Downarrow}
                  height="7vh"
                  alt=""
                />
              </span>
              <span>
                <input
                  type="text"
                  name="alias"
                  id="alias"
                  placeholder="Type Alias here"
                />
              </span>
            </div>
            <button
              style={{
                width: "104%",
                textAlign: "center",
                margin: "3% 0",
              }}
            >
              Trim URL \
            </button>
            <p style={{ color: "#4991ff", fontSize: 14, width: "104%" }}>
              By clicking TrimURL, I agree to the
              <b style={{ fontWeight: "bolder" }}>Terms of Service</b>,
              <br />
              <b style={{ fontWeight: "bolder" }}>Privacy Policy</b> and Use of
              Cookies.
            </p>
          </form>
        </div>
        <div
          style={{
            position: "absolute",
            alignItems: "end",
            marginLeft: "47.6%",
          }}
        >
          <img src={Group2} height="398vh" alt="" />
        </div>
      </section>
    </>
  );
}

export default Form;
