import React, { useState,useContext } from 'react'
import MonsterCard from './MonsterCard.jsx'
import './MonsterList.css'
// import Axios from 'axios'
import MonsterFight from './MonsterFight'
import {MonsterContext} from './monsterContext'

const MonsterList = () => {

    const [monster,setMonster] = useContext(MonsterContext)
    
    // const [monster, setMonster] = useState([])
    

    // const getMonster = () => {
    //     Axios.get(`https://hackathon-wild-hackoween.herokuapp.com/monsters`)
    //         .then(response => setMonster(response.data.monsters))
    // }
    // getMonster()

   
    return (
        <div>
            <div className='monsterList'>

                {monster.map(x =>

                    <MonsterCard key ={x.id} {...x}  />
                )
                }
            </div>
            <div>
                <MonsterFight />
                {/* {console.log(id)} */}
            </div>
            {/* <h1>{id}</h1> */}
        </div>
    )
}
export default MonsterList