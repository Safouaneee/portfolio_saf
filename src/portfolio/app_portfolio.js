
import "./portfolio.css"
import Home from "./home"
import About from "./about"
import Services from "./services"
import Skills from "./skils"
import Work_process from "./workProcess"
import Projects from "./projects"
import Questions from "./common_Questions"
import Client from "./what_say"
import Contact from "./contact"
import Footer from "./footer"
import Reveal from "./reveal"
function App_portfolio(){

    return(
        <div className="hero">
            <div className="hero_child">

                    <div className="container">
                    
                        <Reveal><Home/></Reveal>
                         
                        
                    </div>
            </div>
                <div className="container2">
                    <Reveal><About/></Reveal>
                    <Reveal><Services/></Reveal>
                </div>
            <Reveal><Skills></Skills></Reveal>
            <Reveal><Work_process/></Reveal>
            <Reveal><Projects/></Reveal>
            <Reveal><Questions/></Reveal>
            <Reveal><Client/></Reveal>
            <Reveal><Contact/></Reveal> 
            <Reveal><Footer/></Reveal>
            
        </div>
    )

}export default App_portfolio