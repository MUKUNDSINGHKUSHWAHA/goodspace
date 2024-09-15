import rohit from "../images/rohit.png"
import alan from "../images/alan.png"
import mark from "../images/mark.png"

import integrationLines from "../images/integrationLines.png";
import "../styles/customers.scss";

const Customers = () => {
  const cardInfo = [
    {
      icon: rohit,
      class: "first_card",
      title: "Rohit Mehra",
      content:
        "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
    },
    {
      icon: alan,
      class: "second_card",
      title: "Alan Turing",
      content:
        "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
    },

    {
      icon: mark,
      class: "third_card",
      title: "Mark Jacob",
      content:
        "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
    },
  ];
  return (
    <div className="customers_containers">
      <h3>Our customers love us</h3>
      <div className="cards_container">
        {cardInfo.map((card) => {
          return (
            <div className={`${card.class} card`}>
              <div className="content">{card.content}</div>
              <div className="title_container">
                <img src={card.icon} />
                <div>
                <p className="title">{card.title}</p>
                <p className="position">CFO, XYZ</p>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
