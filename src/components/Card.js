import React from 'react'
import './Card.css'
export default function Card(props) {
    const each = props.props
    const stringify = (each) => {
        return each.join(", ")
    }
    return (
        <div className="myCard">
            <div className="card-header">
                <img src={each.image} alt="" className="w3-animate-left" />
                <h3 style={{textTransform:'capitalize'}}> {each.name} </h3>
            </div>
            <div className="card-header-below w3-animate-top">
                <button className="btn activated">
                    About
                </button>
                <button className="btn muted">
                    Bio
                </button>
                <button className="btn muted">
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
                <h5>personal attributes</h5>
                <h6 className="powers-list">
                {stringify(each.personal)}
                </h6>
            </div>
            <div className="slidecontainer w3-animate-bottom" style={{padding: '0.25rem 2rem 2rem 2rem'}}>
                <input type="range" min="1" max="100" value="20" className="slider" id="myRange" />
            </div>
            <div className="footer d-flex w3-animate-right">
                <div className="font-weight-bold text-primary text-uppercase"
                style={{fontSize:12,padding:'0 2.5rem 1.5rem 2.25rem'}}>
                    Introvert
                </div>
                <div className="font-weight-bold text-muted text-uppercase float-right"
                style={{fontSize:12,padding:'0 5rem 0rem 1rem', marginLeft: '2rem'}}>
                    Extrovert
                </div>
            </div>
        </div>
    )
}
