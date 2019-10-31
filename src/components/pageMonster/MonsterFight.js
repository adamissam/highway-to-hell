import React from 'react'
import MonsterCard from './MonsterCard'
import './MonsterFight.css'


class MonsterFight extends React.Component {

    render() {
        return(
            <div className="monsterFightDiv">
                <h1>Let's FIGHT !!!</h1>
                <div className="card-and-button">
                    <MonsterCard />
                    <button className="fightButton">VS</button>
                    <MonsterCard />
                </div>
            </div>
        )
    }

}

export default MonsterFight