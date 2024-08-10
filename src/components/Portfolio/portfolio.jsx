import {useState} from "react";
import wildsideImg from "../../assets/wildside.png"

function Portfolio() {
const [projects] = useState([
    {   name: "Wildside Events",
        image: {wildsideImg},
        link: "https://casicl.github.io/Wildside-Events/",
        gitHub: "https://github.com/casicl/Wildside-Events"
    },
    {   name: "Happy Paws",
        image: {happyPawsImg},
        link: "https://happypaws-0ccbfdf6880b.herokuapp.com",
        gitHub: "https://github.com/casicl/happy-paws"
    },
    {
        name: "Hairport",
        image: {hairportImg},
        link: "https://hairport-39pg.onrender.com",
        gitHub: "https://github.com/casicl/Hairport"
    }
]);


    return (
       <div>
        <div className="flex-row">
            {projects.map((project, idx)=> (
                <div className="project" key={project.name}>
                    <img src={project.image}
                    className="project-background"/>
                   

            <div className="project-name">
                <h2>{project.name}</h2>        
                </div>
            <div className="project-link">
               <a href={project.link}></a>  
            </div>    
            <div className="project-git">
                <a href={project.gitHub}></a>
                </div>
            </div>

            ))}
        </div>
     </div>)


        }


export default Portfolio;
