import gitHubLogo from "../../assets/github-mark.png";
import linkedinLogo from "../../assets/LI-In-Bug.png";
import {Link} from "react-router-dom";
import "./index.css"

function Footer() {


    return (
        <footer className="footer">
            <div className="imageGit"> <Link to="https://github.com/casicl">
            <img src={gitHubLogo}></img></Link>
            </div>

            <div className="imageLinkIn"> <Link to="https://www.linkedin.com/in/casi-clarkson-875350b2/">
            <img src={linkedinLogo}></img>
            </Link></div>
        </footer>
    )

}
export default Footer;