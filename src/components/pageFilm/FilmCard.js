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
                        <img src={props.src} alt="default"></img>
                        <p>Year : {props.year}</p>
                        <p>Director : {props.director}</p>
                        <p>Country : {props.country}</p>
                    </ModalBody>
                    <ModalFooter>
                       
                    </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }


export default FilmCard