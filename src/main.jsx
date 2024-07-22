//import other end points as needed 
//THIS IS NOT DONE
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About/index.jsx";
import Portfolio from "./components/Portfolio/portfolio.jsx";
import Contact from "./components/Contact/contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <About/>,

            },
        
            {
                path: "portfolio",
                element: <Portfolio/>,
            },

            {
                path: "contact",
                element: <Contact/>,
            },

            // {
            //     path: "resume",
            //     element: <Resume/>,
            // },
            
           
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
    
)