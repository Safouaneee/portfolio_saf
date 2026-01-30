import Navbar from "./Navbar"
function Home(){

    return(
        <section id="home" >
            <Navbar></Navbar>
            <div className="home">

                    <div className="left_home">
                        <div id="wl" className="welcome">
                            <p>WELCOME TO SOCIALZY</p>
                        </div>
                        <h1>Welcome to My Portfolio</h1>
                        <p id="p_home">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    
                        </p>
                        <button>Get Started <i class="ri-arrow-right-circle-line"></i></button><br></br>
                        <img id="users" src={`${process.env.PUBLIC_URL}/users.png`}></img>
                    </div>

                    <div className="right_home">
                        <img id="bg_girl" src={`${process.env.PUBLIC_URL}/image_home.png`}></img>
                        <img id="girl" src={`${process.env.PUBLIC_URL}/girl_img.png`}></img>
                    </div>
            </div>
        </section>
    )

}export default Home