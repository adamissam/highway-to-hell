import React from 'react';
import './Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin, 
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

    return (
        <footer>
            <div class="row">
                <h4 class="titlefooter"> The chuckies</h4>
            </div>

            <div class="row">
                <div class="col colDev">
                    <p>Stevie Cutman</p>
                    <p class="contactIcons"><a href="mailto:steviecut@hotmail.fr"> <i class="fas fa-envelope-square"></i></a>
                    <a href="https://www.linkedin.com/in/stevie-cutman-0108b7194/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div class="col colDev">
                    <p>Kevin Thomann</p>
                    <p class="contactIcon"><a href="mailto:kevin.thomann13@gmail.com"> <i class="fas fa-envelope-square"></i></a> 
                    <a href="https://www.linkedin.com/in/k%C3%A9vin-thomann-6b0146196/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div class="col colDev">
                    <p>Issam Adam</p>
                    <p class="contactIcons"><a href="mailto:issamadam15@gmail.com"> <i class="fas fa-envelope-square"></i></a> 
                    <a href="https://www.linkedin.com/in/issam-adam/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div class="col colDev">
                    <p>Marie Gory</p>
                    <p class="contactIcons"><a href="mailto:marie.gory@gmail.Com"> <i class="fas fa-envelope-square"></i></a>
                    <a href="https://www.linkedin.com/in/marie-gory/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </p>
                </div>

                <div class="col colDev">
                    <p>Loïc Folio</p>
                    <p class="contactIcons">
                        <a href="mailto:folio.loic@gmail.com"> <i class="fas fa-envelope-square"></i></a> 
                        <a href="https://www.linkedin.com/in/loic-Folio/"> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a></p>
                </div>

               
            </div>
        </footer>
    )
}

export default Footer