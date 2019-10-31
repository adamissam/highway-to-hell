import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './MonsterCard.css'

const MonsterCard = (props) => {
    const {
        className
    } = props;
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
        
      return (
            <div className="cardMonster" onClick={toggle}>
                <div className="imageMonster">
                    <img src={props.picture} alt={props.name}></img>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
            
                <div>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle} className="glitch" data-text={props.name}></ModalHeader>
                    <ModalBody>
                        <img src={props.picture} alt={props.picture}></img>
                        <p>{props.description}</p>
                        <p>Attack : {props.attack}</p>
                        <p>Defense : {props.defense}</p>
                    </ModalBody>
                    <ModalFooter>
                       
                    </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }

    export default MonsterCard
