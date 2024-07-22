//do the links need to be href because they are on the page??
//FIX ARRAY
import "./index.css";

import { Link } from "react-router-dom";


const AppNavbar = () => {
  // const ["about", "portfolio", "contact", "resume"];
  return (
    <nav className="nav">
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/Portfolio">Porfolio</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </div>
      
   </nav>
  );
};
export default AppNavbar;
