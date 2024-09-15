import greenIcon from "../images/greenicon.png";
import yellowIcon from "../images/yellowicon.png";
import blueIcon from "../images/blueicon.png";
import integrationLines from "../images/integrationLines.png";
import "../styles/integrations.scss";

const Integrations = () => {
  const cardInfo = [
    {
      icon: yellowIcon,
      class: "yellow_card",
      title: "HRMS Systems",
      content:
        "We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.We are already deeply integrated with PeopleStrong and others are coming up.",
    },
    {
      icon: greenIcon,
      class: "green_card",
      title: "Finance Systems",
      content:
        "Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.Open APIs available to connect.",
    },

    {
      icon: blueIcon,
      class: "blue_card",
      title: "Single Sign-on Systems",
      content:
        "We can integrate to ensure that your users don’t have to log in multiple times into different logins.SSO is possible with any system that offers it.",
    },
  ];
  return (
    <div className="integrations_container">
      <h3>Integrations</h3>
      <img src={integrationLines} className="lines" />
      <div className="cards_container">
        {cardInfo.map((card) => {
          return (
            <div className={`${card.class} card`}>
              <div className="title_container">
                <img src={card.icon} />
                <p className="title">{card.title}</p>
              </div>
              <div className="content">{card.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Integrations;
