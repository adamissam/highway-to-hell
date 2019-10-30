import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './FilmCard.css'

const FilmCard = (props) => {
    const {
        className
    } = props;
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
        
      return (
            <div className="cardFilm" onClick={toggle}>
                <div className="imageFilm">
                    <img src={props.src} alt="monster"></img>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div>
                    <p>{props.title}</p>
                </div>
                <div>
                    <p>{props.year}</p>
                </div>
                <div>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                       
                    </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }


export default FilmCard