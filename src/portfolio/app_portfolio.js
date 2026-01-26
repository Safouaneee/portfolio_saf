
import "./portfolio.css"
import Navbar from "./Navbar"
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
function App_portfolio(){

    return(
        <div className="hero">
        <div className="container">
            <Navbar/>
            <Home/>
            <About/>
            <Services/>

        </div>
            <Skills></Skills>
            <Work_process/>
            <Projects/>
            <Questions/>
            <Client/>
            <Contact/>
            <Footer/>
            
        </div>
    )

}export default App_portfolio