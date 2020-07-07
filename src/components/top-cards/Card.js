import React from 'react';
import './card.css'

function Card(props){
    const {socialImg, userName, followers, icon, todayFollowers, socialMedia} = props
    const classCard = `card + ${socialMedia}`
    return(
        <article className={classCard}>
            <p className="card-title">
                <img src={socialImg} alt="" />
                {userName}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src={icon} alt="icon-up" />
                <span>{todayFollowers} Today</span>
            </p>
        </article>
    )
}

export default Card;