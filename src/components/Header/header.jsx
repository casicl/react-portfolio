import "./index.css"
import backgroundImage from "../../assets/background.jpg";
function Header(props) {
    return (   
        <>
<header className="header">
    <h2>Casi Clarkson</h2>
    <img src={backgroundImage}></img>
{props.children}
</header>
</> 


    )
}

export default Header;