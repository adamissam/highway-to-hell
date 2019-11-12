import React from 'react'
import MonsterFightCard from './MonsterFightCard'
import './MonsterFight.css'


class MonsterFight extends React.Component {


    render() {
        return(
            <div className="monsterFightDiv">
                <h1>Let's FIGHT !!!</h1>
                <div className="card-and-button">
                    <MonsterFightCard />
                    <h2 className="fightButton">VS</h2>
                    <MonsterFightCard />
                </div>
            </div>
        )
    }

}

export default MonsterFight