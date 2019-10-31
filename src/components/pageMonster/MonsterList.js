import React, {useState} from 'react'
import MonsterCard from './MonsterCard.jsx'
import './MonsterList.css'
import Axios from 'axios'

const MonsterList = () =>{

    const [monster, setMonster] = useState([])

    const getMonster = () => {
        Axios.get(`https://hackathon-wild-hackoween.herokuapp.com/monsters`)
        .then(response => setMonster(response.data.monsters))
    }

    getMonster()
    return(
        <div className='monsterList'>
            {monster.map( x =>
               <MonsterCard name={x.name} attack={x.attack} defense={x.defense} picture={x.picture} description={x.description}/>)}
        </div>
        
    )
}

export default MonsterList