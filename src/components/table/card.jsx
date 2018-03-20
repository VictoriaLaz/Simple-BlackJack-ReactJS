import React, {Component} from 'react';

export default class Card extends Component{
    //function to pass arguments for the onClick event
    handleClick = () => {
        this.props.onClick(this.props.className);
    }
    
    render(){
        const {name, className, isClickable, onClick} = this.props;

    //get image for the card
        let image = require(`../../img/${this.props.name}.png`)

    //determine if we want a click event
        if (this.props.isClickable == "true"){
            return(
                <img className={className} src={image} alt={name} onClick={this.handleClick}/>
            )
        }
        else{
            return(
                <img className={className} src={image} alt={name}/>
            )
        }
    }
}