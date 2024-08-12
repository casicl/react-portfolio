
import backgroundImage from "../../assets/background.jpg";
function Header(props) {
    return (   
        
<header className="header">
<img className="header-img" src={backgroundImage}></img>
<h2>Casi Clarkson</h2>
{props.children}







</header>



    )
}

export default Header;