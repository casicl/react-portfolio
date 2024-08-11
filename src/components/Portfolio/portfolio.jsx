import wildsideImg from "../../assets/wildside.jpg";
import happyPawsImg from "../../assets/happypaws.jpg";
import hairportImg from "../../assets/hairport.jpg"
import gitImg from "../../assets/github-mark-sm.png"
import "../Portfolio/portfolio.css";
import { useState } from "react";
import {Link} from "react-router-dom"

function Portfolio() {
  const [projects] = useState([
    {
      name: "Wildside Events",
      image: wildsideImg,
      link: "https://casicl.github.io/Wildside-Events/",
      gitHub: "https://github.com/casicl/Wildside-Events",
    },
    {
      name: "Happy Paws",
      image: happyPawsImg,
      link: "https://happypaws-0ccbfdf6880b.herokuapp.com",
      gitHub: "https://github.com/casicl/happy-paws",
    },
    {
      name: "Hairport",
      image: hairportImg,
      link: "https://hairport-39pg.onrender.com",
      gitHub: "https://github.com/casicl/Hairport",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <img src={project.image} className="project-background" />

            <div className="project-name">
              
              <Link to={project.link}><h4>{project.name}</h4></Link>
              
            </div>
       
            <div className="project-git">
            <Link to={project.gitHub}>
              <img src={gitImg}></img>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
