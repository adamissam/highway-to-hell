import React, { useState } from 'react'
import MonsterCard from './MonsterCard.jsx'
import './MonsterList.css'
import Axios from 'axios'
import MonsterFight from './MonsterFight'

const MonsterList = () => {

    const [monster, setMonster] = useState([])
    const [id, setId] = useState([])

    const getMonster = () => {
        Axios.get(`https://hackathon-wild-hackoween.herokuapp.com/monsters`)
            .then(response => setMonster(response.data.monsters))
    }

    getMonster()

    const getId = () => {
        setId(monster.id)
    }

    return (
        <div>
            <div className='monsterList'>

                {monster.map(x =>

                    <MonsterCard name={x.name} attack={x.attack} defense={x.defense} picture={x.picture} description={x.description} onClick={() => getId()} />
                )
                }
            </div>
            <div>
                <MonsterFight id={id} />
            </div>
            <h1>{id}</h1>
        </div>
    )
}

export default MonsterList