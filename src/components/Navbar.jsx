import brandImage from "../images/Frame 484821.png";
import burgerIcon from "../images/menu-01.png";
import "../styles/navbar.scss"

const Navbar = () => {
    const navLinks = ['Blogs','Features','Pricing','Integrations'];
  return (
    <>
      <nav className="navbar">
        <div>
          <img src={brandImage} />
        </div>
        <div className="hamburger">
          <img src={burgerIcon} />
        </div>

        <div className="nav_links">
            {
               navLinks.map((item)=>{
                return(
                    <p className="nav_link">{item}</p>
                )
               }) 
            }

            <button className="nav_btn">Start trial</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
