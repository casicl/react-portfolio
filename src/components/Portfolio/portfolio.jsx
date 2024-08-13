import wildsideImg from "../../assets/wildside.jpg";
import happyPawsImg from "../../assets/happypaws.jpg";
import hairportImg from "../../assets/hairport.jpg";
import bookSearchImg from "../../assets/booksearch.jpg";
import notetakerImg from "../../assets/notetaker.png";
import workDayImg from "../../assets/workdayscheduler.jpg";
import gitImg from "../../assets/github-mark-sm.png";
import "../Portfolio/portfolio.css";
import { useState } from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion"

function Portfolio() {
  console.log(motion);
  const [flip, setFlip] = useState(true);
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
    {
      name: "Google Book Search",
      image: bookSearchImg,
      link: "https://casi-book-search-b28137c233e5.herokuapp.com/",
      gitHub: "https://github.com/casicl/book-search",
    },

    {
      name: "Notetaker App",
      image: notetakerImg,
      link: "https://notetaker-app-for-nerds-2f44691a84f9.herokuapp.com/",
      gitHub: "https://github.com/casicl/notetaker-app",
    },
    {
      name: "Work Day Scheduler",
      image: workDayImg,
      link: "https://casicl.github.io/work-day-scheduler/",
      gitHub: "https://github.com/casicl/work-day-scheduler",
    },

  ]);

  return (
   
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <img src={project.image} className="project-background" />

            <div className="project-name">
              
              <Link to={project.link} target="_blank" ><h4>{project.name}</h4></Link>
              
            </div>
       
            <div className="project-git">
            <Link to={project.gitHub} target="_blank">
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
