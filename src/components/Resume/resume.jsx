//where to put resume
//i dont have a resume
function Resume() {
  
        const onButtonClick = () => {
            const pfdURL="Casi-Clarkson-resume";

        };
        return (
        <div className="resume">
            <p>Download my resume here: 
                <button onClick={onButtonClick}>Download PDF</button>
            </p>

            <h4></h4>
        </div>
    )
}

export default Resume;