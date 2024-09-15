import "../styles/heroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero_container">
      <div className="hero_info">
        <h3>The World’s Most Configurable</h3>
        <h1>Travel & Expense Management Software</h1>
        <p>
          Configure <a>any</a> rule. Enable a world class mobile experience for
          your users. Get seamless reporting & integrations. Inbuilt OCR expense
          scanning. Manage travel & non-travel expenses. Open APIs to connect
          with external systems.
        </p>
      </div>
      <div className="hero_form">
        <form>
          <div>
            <input className="name_input" type="text" placeholder="Name" />
          </div>
          <div>
            <input className="email_input" type="email" placeholder="Official email ID" />
          </div>
          <div>
            <button type="submit">Start trial</button>
          </div>
        </form>
        <div className="trial_container">
          <p>30 Days free trial &#x2022;</p>
          <p> &nbsp; Upto 10 users</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
