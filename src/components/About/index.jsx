import './index.css';
import myImage from "../../assets/avatar.png"



function About()
{
   

    return (
       <section className="parent"> 
        <div className="about-me">
            <img className="avatar" src={myImage} alt="small black dog"/>   
        </div>
        <div className="bio">
            <p>Long-time employee of the state of Texas, most recently working for the Long-term Care Ombudsman program, 
                advocating for the rights of residents in long-term care facilities. After being a stay-at-home parent for 5 years, 
                I decided to study web development and here we are.</p>

                <p>My hobbies include playing K-9 disc with my whippet, Zero, playing video games, reading, and enjoying the outdoors.
                    I live near Portland, Oregon with my spouse and 5 year-old son.
                </p>
        </div>
        </section>
    );



}
export default About;
