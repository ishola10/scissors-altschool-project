import "../App.css";
import Link2 from "../images/link-2.png";
import Edit from "../images/edit.png";
import Grid from "../images/grid.png";
import Activity from "../images/activity.png";

function Review() {
  return (
    <>
      <section className="part4">
        <div id="part4">
          <h2 style={{ fontSize: 30, width: "37%" }}>
            One Stop. <br />
            Four <b style={{ color: "#0065fe" }}>Possibilities</b> .
          </h2>
          <span>
            <h2 style={{ fontSize: 30 }}>3M</h2>
            <p style={{ font: "size 14%" }}>Active users</p>
          </span>
          <span>
            <h2 style={{ fontSize: 30 }}>60M</h2>
            <p>Links &amp; QR codes created</p>
          </span>
          <span>
            <h2 style={{ fontSize: 30 }}>1B</h2>
            <p>Clicked &amp; Scanned connections</p>
          </span>
          <span>
            <h2 style={{ fontSize: 30 }}>300k</h2>
            <p>App Integrations</p>
          </span>
        </div>
      </section>
      <section className="part5">
        <div id="part5">
          <nav>
            <h1>Why choose Scissors</h1>
            <p>
              Scissors is the hub of everything that has to do <br />
              with your link management. We shorten your URLs, <br />
              allow you creating custom ones for your personal, <br />
              business, event usage. Our swift QR code <br />
              creation, management and usage tracking with <br />
              advance analytics for all of these is second to <br />
              none.
            </p>
          </nav>
          <nav>
            <img src={Link2} alt="" />
            <h1>URL Shortening</h1>
            <p>
              Scissor allows you to shorten URLs of your <br />
              business, events. Shorten your URL at scale, <br />
              URL redirects.
            </p>
          </nav>
          <nav>
            <img src={Edit} alt="" />
            <h1>Custom URLs</h1>
            <p>
              With Scissor, you can create custom URLs, <br />
              with the length you want! A solution for socials <br />
              and businesses.
            </p>
          </nav>
        </div>
        <div className="qr-code-data-analytics">
          <nav>
            <img src={Grid} alt="" />
            <h1>QR Codes</h1>
            <p>
              Generate QR codes to your business, events. <br />
              Bring your audience and customers to your <br />
              doorstep with this scan and go solution.
            </p>
          </nav>
          <nav>
            <img src={Activity} alt="" />
            <h1>Data Analytics</h1>
            <p>
              Receive data on the usage of either your <br />
              shortened URL, custom URLs or generated QR <br />
              codes. Embedded to monitor progress.
            </p>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Review;
