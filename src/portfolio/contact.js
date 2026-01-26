function Contact(){
    return(

    <section id="contact">
        <h1 id="title_contact">Contact <span>Us</span> </h1>
        <p id="desc_contact">Get in touch with us to discuss your project, ask questions, or explore how we can work together</p>
        <div className="contact">
                <div className="img_contact">
                    <img id="img1" src="bg_image_contact2.png"></img>
                    <img id="img2"src="img_contact.png"></img>
                </div>
                <form id="form_conatct">
                    <label>Nom complet</label>
                    <input placeholder="Votre nom" type="text" id="nom"></input>

                    <div className="second_ligne">
                            <div className="email">
                                <label id="email_lb">Email</label>
                                <input placeholder="Votre Email" type="text" id="email"></input>

                            </div>
                            <div className="num">
                                <label id="phone_lb">Numéro de téléphone</label>
                                <input placeholder="Numéro de téléphone" type="text" id="num"></input>

                            </div>
                    </div>


                    <label id="msgg">Message</label>
                    <textarea id="texte" placeholder="Ecrivez votre message ici" rows={4}></textarea>

                    <div className="fichier">
                        <i class="ri-upload-cloud-line"></i>
                        <label>
                        Ajouter une piece jointe
                        <input type="file" hidden></input>
                        </label>
                    </div>
                    <button id="enr">Envoyer le message</button>


                </form>
        </div>
        
    </section>
    )
    
}export default Contact