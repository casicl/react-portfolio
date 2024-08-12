import "./App.css";
import Header from "./components/Header/header.jsx";
import Nav from "./components/Navbar/index.jsx";
import About from "./components/About/index.jsx";
import Footer from "./components/Footer/footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
    
    return (
        <div>
            <Header>
                <Nav/>
            </Header>
        
            <Outlet/>
        
        <Footer/>
        </div>
    );
}

export default App;