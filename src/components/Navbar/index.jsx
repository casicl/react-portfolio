//is this how the links should work?
//FIX ARRAY


import { Link } from "react-router-dom";


const Nav = () => {
  const links =["about", "portfolio", "contact", "resume"];
  return (
    <nav className="nav">
      <div className="nav-items">
        <ul className="nav-list">
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
export default Nav;
