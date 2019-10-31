import React from 'react';
import './Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

    return (
        <footer>
            <div className="row">
                <h4 className="titlefooter"> The chuckies</h4>
            </div>

            <div className="row">
                <div className="col colDev">
                    <p>Stevie Cutman</p>
                    <p className="contactIcons"><a href="mailto:steviecut@hotmail.fr"> <i className="fas fa-envelope-square"></i></a>
                    <a href="https://www.linkedin.com/in/stevie-cutman-0108b7194/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div className="col colDev">
                    <p>Kevin Thomann</p>
                    <p className="contactIcon"><a href="mailto:kevin.thomann13@gmail.com"> <i className="fas fa-envelope-square"></i></a> 
                    <a href="https://www.linkedin.com/in/k%C3%A9vin-thomann-6b0146196/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div className="col colDev">
                    <p>Issam Adam</p>
                    <p className="contactIcons"><a href="mailto:issamadam15@gmail.com"> <i className="fas fa-envelope-square"></i></a> 
                    <a href="https://www.linkedin.com/in/issam-adam/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div className="col colDev">
                    <p>Marie Gory</p>
                    <p className="contactIcons"><a href="mailto:marie.gory@gmail.Com"> <i className="fas fa-envelope-square"></i></a>
                    <a href="https://www.linkedin.com/in/marie-gory/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div className="col colDev">
                    <p>Loïc Folio</p>
                    <p className="contactIcons">
                        <a href="mailto:folio.loic@gmail.com"> <i className="fas fa-envelope-square"></i></a> 
                        <a href="https://www.linkedin.com/in/loic-Folio/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a></p>
                </div>

               
            </div>
        </footer>
    )
}

export default Footer