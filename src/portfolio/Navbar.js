import "./portfolio.css"
function Navbar(){
    return(
        <nav>
            <div className="logo">
               <h1 className="name_logo">
                S<span id="a">a</span>fou<span>A</span>ne</h1>
            </div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#services">About</a>
                <a href="#skills">Skils</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

            </div>
            <div className="phone_number">
                <img src="icon_phone.png"></img>
                <h2>(+212) 689 52 41 38</h2>
            </div>
        </nav>
    )

}export default Navbar