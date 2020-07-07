import React from 'react';
import './top-card.css'

import Card from './Card'

const cardListDatas = [
    {
        id: 1,
        socialImg: "../img/icon-facebook.svg",
        userName: "@juan_carlos008",
        followers: "1,987",
        icon: "../img/icon-up.svg",
        todayFollowers: 13,
        socialMedia: 'facebook'
    },
    {
        id: 2,
        socialImg: "../img/icon-twitter.svg",
        userName: "@juan_carlos008",
        followers: "2,349",
        icon: "../img/icon-up.svg",
        todayFollowers: 36,
        socialMedia: 'twitter'
    },
    {
        id: 3,
        socialImg: "../img/icon-instagram.svg",
        userName: "@juan_carlos008",
        followers: "2,328",
        icon: "../img/icon-down.svg",
        todayFollowers: -5,
        socialMedia: 'instagram'
    },
    {
        id: 4,
        socialImg: "../img/icon-youtube.svg",
        userName: "@juan_carlos008",
        followers: "10k",
        icon: "../img/icon-up.svg",
        todayFollowers: 50,
        socialMedia: 'youtube'
    }
]

function TopCards (){
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListDatas.map((cardData) => (<Card key={cardData.id} {...cardData} />)
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCards;