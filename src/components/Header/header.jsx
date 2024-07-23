
import backgroundImage from "../../assets/background.jpg";
function Header(props) {
    return (   
        <>
<header className="header">

    <h2>Casi Clarkson</h2>
    {props.children}
    <img className="header-img" src={backgroundImage}></img>
    
    

</header>
</> 


    )
}

export default Header;