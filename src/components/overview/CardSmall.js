import React from 'react';
import './cardsmall.css'

function CardaSmall({social}){
    return(

        <>{social.map(data =>(
            <div className="card-small" key={data.id}>
                <p className="card-small-view">{data.title}</p>
                <p className="card-small-icon">
                    <img src={data.socialImg} alt={data.socialMedia} />
                </p>
                <p className="card-small-number">{data.number}</p>
                <p className="card-small-porcent">
                    <span>
                        <img src={data.icon} alt="" />
                        <span>{data.percent}%</span>
                    </span>
                </p>
            </div>)
            
            )}</>
        
        
    )
}


//const {socialImg, number, icon, percent, socialMedia} = props;
{/* <div className="card-small">
            <p className="card-small-view">Page Views</p>
            <p className="card-small-icon">
                <img src={socialImg} alt={socialMedia} />
            </p>
            <p className="card-small-number">{number}</p>
            <p className="card-small-porcent">
                <span>
                    <img src={icon} alt="" />
                    <span>{percent}%</span>
                </span>
            </p>
        </div> */}
export default CardaSmall;