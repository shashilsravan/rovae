import React, {useState} from 'react'
import './Card.css'

function handleClick(e){
    // if ( !e.target.classList.contains('activated')){
    //     e.target.classList.add('activated')
    // }
    console.log('button clicked')
}
export default function Card(props) {
    const each = props.props
    const randomNum = Math.random() * 85
    const [ value, setValue ] = useState(randomNum); 
    const stringify = (each) => {
        return each.join(", ")
    }
    return (
        <div className="myCard">
            <div className="lined"></div>
            <div className="card-header">
                <img src={each.image} alt="" className="w3-animate-left" />
                <h3 style={{textTransform:'capitalize'}}> {each.name} </h3>
            </div>
            <div className="card-header-below w3-animate-top">
                <button className="btn activated" 
                onClick={(e) => handleClick(e)}>
                    About
                </button>
                <button className="btn muted" 
                onClick={(e) => handleClick(e)}>
                    Bio
                </button>
                <button className="btn muted" 
                onClick={(e) => handleClick(e)}>
                    Contact
                </button>
            </div>
            <div className="superpower  w3-animate-top">
                <h5>super power</h5>
                <h6 className="powers-list">
                    {stringify(each.super)}
                </h6>
            </div>
            <div className="superpower w3-animate-top">
                <h5 style={{fontFamily:"Inter"}}>personal attributes</h5>
                <h6 className="powers-list">
                {stringify(each.personal)}
                </h6>
            </div>
            <input 
            className="range-slider__range"
            type="range"
            value={value}
                onChange={changeEvent => {
                    setValue(changeEvent.target.value)
                    console.log(value)
                }}
            min="0" max="100" />
            <div className="footer my-2 d-flex w3-animate-right">
                <div 
                className={value < 50? "font-weight-bold text-primary text-uppercase" : "font-weight-bold text-muted text-uppercase float-right"}
                style={{fontSize:12,padding:'0 2.5rem 1.5rem 2.25rem'}}>
                    Introvert
                </div>
                <div className={value >= 50 ? "font-weight-bold text-primary text-uppercase" : "font-weight-bold text-muted text-uppercase float-right"}
                style={{fontSize:12,padding:'0 5rem 0rem 1rem', marginLeft: '2rem'}}>
                    Extrovert
                </div>
            </div>
        </div>
    )
}
