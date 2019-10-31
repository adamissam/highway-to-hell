import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
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
                        <div className="modalText">
                            <p>{props.description}</p>
                            <p>Attack : {props.attack}</p>
                            <p>Defense : {props.defense}</p>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
        )
    }

    export default MonsterCard
