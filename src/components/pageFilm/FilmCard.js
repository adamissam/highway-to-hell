import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import './FilmCard.css'

const FilmCard = (props) => {
    const {
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [redirect, setRedirect] = useState(false)
    const toggle = () => setModal(!modal);

    
    const handleChange = () =>{
        setRedirect(!redirect)
    }
    const renderRedirect = () =>{
        if(redirect){
            return <Redirect
            to={{
              pathname: "/watch",
              
              state: { identif: props.title }
            }}
          />
        }
    }

      return (
            <div className="cardFilm" onClick={toggle}>
                {renderRedirect()}
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
                    <Modal  isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle} 
                        className="glitch"
                        data-text={props.title}></ModalHeader>
                    <ModalBody>
                        <img src={props.src} alt="default"></img>
                        <div className="modalText">
                            <p>Year : {props.year}</p>
                            <p>Director : {props.director}</p>
                            <p>Country : {props.country}</p>
                            <button  onClick={()=>handleChange()}>Lecture</button>
                        </div>
                        
                    </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }


export default FilmCard
