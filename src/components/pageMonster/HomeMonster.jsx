import React from 'react'
import Footer from '../footer/Footer'
import MonsterList from './MonsterList'
import './HomeMonster.css'
import MonsterFight from './MonsterFight'

class HomeMonster extends React.Component {
    render(){
        return(
            <div className="homeMonsterDiv">
                {/*<Header />*/}
                <MonsterList />
                <MonsterFight />
                <Footer />
            </div>
        )
    }
}

export default HomeMonster