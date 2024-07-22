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
            <p>Some stuff about me goes here. And then another sentence. And some more stuff. and then some more maybe.</p>
        </div>
        </section>
    );



}
export default About;
