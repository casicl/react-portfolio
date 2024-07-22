import "./App.css";
import Header from "./components/Header/header.jsx";
import Nav from "./components/Navbar/index.jsx";
import About from "./components/About/index.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
    
    return (
        <div>
            <Header>
                <Nav/>
            </Header>
        <div className="about-me">
            <About/>
        </div>
        <Footer/>
        </div>
    );
}

export default App;