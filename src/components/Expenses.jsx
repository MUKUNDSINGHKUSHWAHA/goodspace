import "../styles/expenses.scss";
const Expenses = () => {
  return (
    <div className="expenses_containers">
      <h3>Our customers love us</h3>

      <div className="hero_form">
        <form>
          <div>
            <input className="name_input" type="text" placeholder="Name" />
          </div>
          <div>
            <input
              className="email_input"
              type="email"
              placeholder="Official email ID"
            />
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

export default Expenses;
