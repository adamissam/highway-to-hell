import React from 'react'

const MonsterFightCard = (props) => {

        return(
            <div>
                <div className="cardMonster">
                    <div className="imageMonster">
                        <img src={props.picture} alt={props.name}></img>
                    </div>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
            </div>
        )
}



export default MonsterFightCard