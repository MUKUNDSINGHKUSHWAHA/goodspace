import brandImage from "../images/Frame 484821.png";
import phone from "../images/phone.png";
import location from "../images/location.png";
import insta from "../images/insta.png";
import youtube from "../images/youtube color.1.png";
import linkedin from "../images/linkedin.png";
import "../styles/footer.scss";

const Footer = () => {
  const lowerLinks = ["Blogs", "Features", "Pricing", "Integrations"];
  return (
    <div className="footer_container">
      <div className="footer_uper">
        <img className="logo" src={brandImage} />
        <div className="right_links">
          <div className="link">
            <img src={location} />
            <p className="link_text">Address</p>
          </div>
          <div className="link">
            <img src={phone} />
            <p className="link_text">+91 1234567890</p>
          </div>
          <div className="media_container">
            <p>Social Media</p>
            <div className="icons">
              <img src={linkedin} />
              <img src={youtube} />
              <img src={insta} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer_lower">
        <div className="lower_links">
          {lowerLinks.map((link) => {
            return <div className="lower_link">{link}</div>;
          })}
        </div>
        <div className="trial_container">
          <p>Copyright © 2024 &#x2022;</p>
          <p> &nbsp; ExpenseBook</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
