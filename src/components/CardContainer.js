import React, { Component, useState } from 'react'
import './CardContainer.css'

import Card from './Card'
import data from '../data/data'
export default class CardContainer extends Component {
    constructor(props){
        super(props)
        console.log('props', props)
        this.state = {
            isToggled:  props.props.isToggled,
            searchText:  props.props.searchText.toString().toLowerCase(),
            uiux:  props.props.uiux,
            aws: props.props.aws,
            backend: props.props.backend,
            ml: props.props.ml,
            frontend: props.props.frontend,
            cybersec: props.props.cybersec,
            ai: props.props.ai,
            networking: props.props.networking,
            communication: props.props.communication,
            loyalty: props.props.loyalty,
            workethic: props.props.workethic,
            flex: props.props.flex,
            teamplayer: props.props.teamplayer,
            honesty: props.props.honesty,
            persistence: props.props.persistence,
            time: props.props.time,
            cards: data,
        }
        this.checkProps = this.checkProps.bind(this)
    }
    componentWillReceiveProps(nextProps){
        this.setState(
            {
                isToggled: nextProps.props.isToggled,
                searchText: nextProps.props.searchText.toString().toLowerCase(),
                uiux: nextProps.props.uiux,
                aws:nextProps.props.aws,
                backend:nextProps.props.backend,
                ml:nextProps.props.ml,
                frontend:nextProps.props.frontend,
                cybersec:nextProps.props.cybersec,
                ai:nextProps.props.ai,
                networking:nextProps.props.networking,
                communication:nextProps.props.communication,
                loyalty:nextProps.props.loyalty,
                workethic:nextProps.props.workethic,
                flex:nextProps.props.flex,
                teamplayer:nextProps.props.teamplayer,
                honesty:nextProps.props.honesty,
                persistence:nextProps.props.persistence,
                time:nextProps.props.time
            }
        )
    }
    checkProps(cards){
        let filteredCards = cards;
        if (this.state.searchText == ''){
            filteredCards = data
        }
        if (this.state.searchText != ''){
            filteredCards = filteredCards.filter(each => {
                if(each.name.indexOf(this.state.searchText) != -1){
                    return each
                }
            })
        }
        if (this.state.uiux){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("UI/UX Designing") != -1){
                    return each
                }
            })
        }
        if (this.state.aws){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("AWS") != -1){
                    return each
                }
            })
        }
        if (this.state.backend){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("Backend Dev") != -1){
                    return each
                }
            })
        }
        if (this.state.ml){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("ML") != -1){
                    return each
                }
            })
        }
        if (this.state.ai){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("AI") != -1){
                    return each
                }
            })
        }
        if (this.state.frontend){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("Frontend Dev") != -1){
                    return each
                }
            })
        }
        if (this.state.cybersec){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("Cybersecurity") != -1){
                    return each
                }
            })
        }
        if (this.state.networking){
            filteredCards = filteredCards.filter(each => {
                if (each.super.indexOf("Networking") != -1){
                    return each
                }
            })
        }
        if (this.state.communication){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Communication") != -1){
                    return each
                }
            })
        }
        if (this.state.loyalty){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Loyalty") != -1){
                    return each
                }
            })
        }
        if (this.state.workethic){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Work Ethic") != -1){
                    return each
                }
            })
        }
        if (this.state.flex){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Flexibility") != -1){
                    return each
                }
            })
        }
        if (this.state.teamplayer){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Team Player") != -1){
                    return each
                }
            })
        }
        if (this.state.honesty){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Honesty") != -1){
                    return each
                }
            })
        }
        if (this.state.persistence){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Persistence") != -1){
                    return each
                }
            })
        }
        if (this.state.time){
            filteredCards = filteredCards.filter(each => {
                if (each.personal.indexOf("Time") != -1){
                    return each
                }
            })
        }
        return filteredCards
    }
    render() {
        let filtered = this.checkProps(this.state.cards)
        return (
            <div className="card-container">
                {filtered.length == 0?
                <div>
                    <img src="https://i.pinimg.com/originals/32/3e/3b/323e3b47f07fa1fb0a4b2ecb03b2c965.png" 
                    height="100px" width="100px" alt="" />
                    <h1>Oops... No Members matched!!!</h1>
                </div> 
                :filtered.map((each, index) => {
                    return <Card props={each} key={index} />
                })}
            </div>
        )
    }
}
