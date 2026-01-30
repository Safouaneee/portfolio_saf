function Contact(){
    return(

    <section id="contact">
        <h1 id="title_contact">Contact <span>Us</span> </h1>
        <p id="desc_contact">Get in touch with us to discuss your project, ask questions, or explore how we can work together</p>
        <div className="contact">
                <div className="img_contact">
                    <img id="img1" src={`${process.env.PUBLIC_URL}/bg_image_contact2.png`}></img>
                    <img id="img2"src={`${process.env.PUBLIC_URL}/img_contact.png`}></img>
                </div>
                <form id="form_conatct">
                    <label>Full Name</label>
                    <input placeholder="Your Name" type="text" id="nom"></input>

                    <div className="second_ligne">
                            <div className="email">
                                <label id="email_lb">Email</label>
                                <input placeholder="Your Email" type="text" id="email"></input>

                            </div>
                            <div className="num">
                                <label id="phone_lb">Phone Number</label>
                                <input placeholder=" Your Phone Number" type="text" id="num"></input>

                            </div>
                    </div>


                    <label id="msgg">Message</label>
                    <textarea id="texte" placeholder="Enter Your Message here" rows={4}></textarea>

                    <div className="fichier">
                        <i class="ri-upload-cloud-line"></i>
                        <label>
                       Add an attachment here
                        <input type="file" hidden></input>
                        </label>
                    </div>
                    <button id="enr">Send Message</button>


                </form>
        </div>
        
    </section>
    )
    
}export default Contact