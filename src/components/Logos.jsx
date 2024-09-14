import logoImage from  "../images/carousal-logo.png"
import "../styles/logos.scss"
const Logos = ()=>{
    return (
        <div className="logo_container">
            <p>USED BY OVER 50 ENTERPRISES</p>
            <div className="img_container">
                <img src={logoImage} className="logo_image"/>
                <img src={logoImage} className="logo_image"/>
                <img src={logoImage} className="logo_image"/>
                <img src={logoImage} className="logo_image"/>
                <img src={logoImage} className="logo_image"/>
                <img src={logoImage} className="logo_image"/>
            </div>
        </div>
    )
}

export default Logos;