//where to put resume
//i dont have a resume
import "./resume.css";

function Resume() {
  
        const onButtonClick = () => {
            const pfdURL="Casi-Clarkson-resume";

        };
        return (
            <div>
        <div className="resume">
            <p><h3>Download my resume here:</h3> <a href="https://profile.indeed.com/resume" ><button onClick={onButtonClick}>Download PDF</button></a>
                
            </p>
        </div>
        <h3>Skills:</h3>
        <div>
            <ul className="skills-list">
                
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>


            </ul>

        </div>
        </div>
    )
}

export default Resume;