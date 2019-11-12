import React from 'react'
import {MonsterController} from './monsterContext'
import HomeMonster from './HomeMonster'
import MonsterCard from './MonsterCard'
import MonsterFight from './MonsterFight'


const Contro = () =>{
    return (
        <div>
            <MonsterController>
                <HomeMonster />
                <MonsterFight />
                <MonsterCard />
            </MonsterController>
        </div>
    )
}
export default Contro;