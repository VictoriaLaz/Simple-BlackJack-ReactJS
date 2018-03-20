import React, { Component } from 'react';
import $ from 'jquery';
import Card from './card.jsx';
import Deck from '../../actions/deck';

export default class Table extends Component{
    constructor(props){
        super(props);
        this.deck = new Deck();

        //bind functions
        this.cardDisappear = this.cardDisappear.bind(this);
        this.deal = this.deal.bind(this);

        this.state={
            deckEmpty:false,
            card1:this.deck.drawCard(),
            card2:this.deck.drawCard(),
            card3:this.deck.drawCard(),
            cardA:this.deck.drawCard(),
            cardB:this.deck.drawCard(),          
        }
    }
    deal(){
        //check if the deck is empty and draw new player cards
        if(this.deck.getDeck().length != 0){
            this.setState({cardA:this.deck.drawCard()})
            $('.cardA').addClass('cardAdeal cardDisappear');
        }
        if(this.deck.getDeck().length != 0){
            this.setState({cardB:this.deck.drawCard()})
            $('.cardB').addClass('cardBdeal cardDisappear');
        }
        else{
            this.setState({deckEmpty:true})
        }
        setTimeout(function(){$('.cardDisappear').removeClass('cardDisappear')},300);
    }

    //onClick event for player cards
    cardDisappear(card){
        $(`.${card}`).addClass('cardDisappear');
    }
    
    render(){
        const deckImg = require('../../img/blue_back.png');
        return(
            <div id="table">
                    <div id="left-field">
                        <div id="dealer-cards">
                            <div className="card-holder">
                                <Card name={this.state.card1} 
                                    className="card1" isClickable="false"/>
                            </div>
                            <div className="card-holder">
                                <Card name={this.state.card2} 
                                    className="card2" isClickable="false"/>
                            </div>
                            <div className="card-holder">
                                <Card name={this.state.card3} 
                                    className="card3" isClickable="false"/>
                            </div>
                        </div>
                        <div id="player-cards">
                            <div className="card-holder">
                                <Card name={this.state.cardA} 
                                    className="cardA" isClickable="true" 
                                    onClick={this.cardDisappear}/>
                            </div>
                            <div className="card-holder">
                                <Card name={this.state.cardB} 
                                    className="cardB" isClickable="true"
                                    onClick={this.cardDisappear}/>
                            </div>
                        </div>
                    </div>
                    <div id="right-field">
                        <div id="deck">
                            {/*show image only if the deck is not empty*/}
                            {!this.state.deckEmpty &&<img src={deckImg}/>}
                        </div>
                        <div id="btn">
                            <button onClick={this.deal}>HIT</button>
                        </div>
                    </div>
            </div>
        );
    }
}