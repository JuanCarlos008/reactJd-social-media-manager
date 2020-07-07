import React from 'react';
import './overview.css'

import CardSmall from './CardSmall'

const cardSmallList = [
    {
        social: [
            {
                id: 1,
                title: 'Page Views',
                socialImg: "../img/icon-facebook.svg",
                number: "87",
                icon: "../img/icon-up.svg",
                percent: "3",
                socialMedia: "facebook"
            },
            {
                id: 2,
                title: 'Likes',
                socialImg: "../img/icon-facebook.svg",
                number: "52",
                icon: "../img/icon-down.svg",
                percent: "-2",
                socialMedia: "facebook"
           }
        ]
    },
    {
        social: [
            {
                id: 3,
                title: "Profile Viwes",
                socialImg: "../img/icon-instagram.svg",
                number: "3,261",
                icon: "../img/icon-up.svg",
                percent: "225.7",
                socialMedia: "instagram"
            },
            {
                id: 4,
                title: "Likes",
                socialImg: "../img/icon-instagram.svg",
                number: "27k",
                icon: "../img/icon-up.svg",
                percent: "153.6",
                socialMedia: "instagram"
            }
        ]
    },
    {
        social: [
            {
                id: 5,
                title: "Retweets",
                socialImg: "../img/icon-twitter.svg",
                number: "117",
                icon: "../img/icon-up.svg",
                percent: "303",
                socialMedia: "twiter"
            },
            {
                id: 6,
                title: "Likes",
                socialImg: "../img/icon-twitter.svg",
                number: "507",
                icon: "../img/icon-up.svg",
                percent: "553",
                socialMedia: "twiter"
            }
        ]
    },
    {
        social: [
            {
                id: 7,
                title: "Total Views",
                socialImg: "../img/icon-youtube.svg",
                number: "107",
                icon: "../img/icon-down.svg",
                percent: "-19",
                socialMedia: "youtube"
            },
            {
                id: 8,
                title: "Likes",
                socialImg: "../img/icon-youtube.svg",
                number: "1,407",
                icon: "../img/icon-down.svg",
                percent: "-12",
                socialMedia: "youtube"
            }
        ]
    }
]


function OverView(){
    /* {cardSmallList.map(({social}) => {
        console.log(social)
    })} */
    return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">

                {
                    cardSmallList.map(({social}, index) => (
                    <CardSmall key={index} social={social} 
                    />))
                }
                {/* {cardSmallList.map( ({id, socialImg, number, icon, percent, socialMedia}) => 
                    (<CardSmall 
                        key={id} 
                        socialImg={socialImg}
                        number={number}
                        icon={icon}
                        percent={percent}
                        socialMedia={socialMedia}
                    />)
                )} */}
        
                </div>
            </div>
        </section>
    )
}

export default OverView;