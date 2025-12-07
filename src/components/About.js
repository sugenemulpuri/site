import React, { useState } from 'react';
import Modal from './Modal';
import "./About.css";

function About() {
    const [selectedImage, setSelectedImage] = useState(null);



    return (
        <div className="mainAbout">
            <h1 className="AboutH1 fadeInLeft">About Me</h1>
            <div className="AboutP fadeInUp">Sugene Mulpuri is a software developer with 8 years of overall experience in IT and over 4 years of experience in email marketing. He graduated from Michigan State University with a Bachelors of Science degree in Psychology. He made a jump to web development in 2019 through a training program and worked building small scale documents as he got into the email marketing field. He enjoys front-end development because of the direct results you can see change as you code, as it is a sort of guidance to the right direction.
            </div>
        <div className="imageContainer fadeInUp">
            <img className="image-1" src="./images/About/Sugene-Mom-Meghana.jpg" onClick={() => setSelectedImage({ src:"./images/About/Sugene-Mom-Meghana.jpg", className:"image-1", alt:"Sugene and his mom and sister"})} />
            <img className="image-2" src="./images/About/Sugene-Arjun.jpg" onClick={() => setSelectedImage({ src:"./images/About/Sugene-Arjun.jpg", className:"image-2", alt:"Sugene and his nephew"})} />
            <img className="image-3" src="./images/About/Sugene-Humza.jpg" onClick={() => setSelectedImage({src:"./images/About/Sugene-Humza.jpg", className:"image-3", alt:"Sugene and his friend with cousins"})} />
        </div>



<Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}> {selectedImage && <img src={selectedImage.src} className={selectedImage.className} alt={selectedImage.alt}/>} </Modal>


        </div>
    )
}

// The About Me page is all HTML and 3 images exist on the bottom which each have modal functionalities. The pictures stack on mobile. This Modal logic is more complex in that since there are 3 images that could be rendered, each set method from the useState must have its own properties and logic is set to read the value of the image clicked on and associate it with image properties passed from the html, in order to render the correct image.

export default About;