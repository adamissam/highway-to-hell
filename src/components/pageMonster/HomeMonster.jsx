import React from 'react'
import Footer from '../footer/Footer'
import MonsterList from './MonsterList'
import './HomeMonster.css'

class HomeMonster extends React.Component {
    render(){
        return(
            <div className="homeMonsterDiv">
                {/*<Header />*/}
                <MonsterList />
                <Footer />
            </div>
        )
    }
}

export default HomeMonster