import image2 from "../images/Group 2.png";
import image3 from "../images/Group 3.png";
import image4 from "../images/Group 4.png";
import image5 from "../images/Group 5.png";
import image6 from "../images/Group 6.png";
import image7 from "../images/Group 7.png";
import image8 from "../images/Group 8.png";
import image9 from "../images/Group 9.png";
import image10 from "../images/Group 10.png";
import "../styles/needs.scss";

const Needs = () => {
  const headingsArr = [
    "Setup Employee Groups",
    "Setup Employee Groups",
    "Customized Reports",
    "Superior Employee Experience",
    "Easy Integrations",
    "Configurable Workflows",
    "Scan any Bill",
    "AI-Based Concierge",
    "AI-Assisted Trip Planning",
  ];

  const contentArr = [
    "Use any parameter to setup distinct employee groups to implement policies",
    "Configure ANY policy - and if you can’t configure it, we promise to work on it for free",
    "Setup the reports that you want using our seamless reporting engine.",
    "Manage all expenses and travel requests easily. Empower your employees with personalized reports.",
    "Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs.",
    "Configure approvals or rejections. Escalations and reports. At will. Setup new groups.",
    "The world’s best OCR system backs up this product. All data goes in. 99% success.",
    "Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7.",
    "Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.",
  ];

  const imageArr = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const tagArr = ["", "", "", "", "", "", "", "Coming soon", "Coming soon"];
  return (
    <div className="needs_container">
      <h3>Features that suit your needs</h3>
      <div className="grid">
        {imageArr.map((item, index) => {
          return (
            <div className="grid_item">
              <div className="title_container">
                <img src={item} />
                <p>{headingsArr[index]}</p>
                {
                  tagArr[index] === "" ?  <div></div> :  <div className="tag">{tagArr[index]}</div>
                }
               
              </div>
              <div className="content">{contentArr[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Needs;
