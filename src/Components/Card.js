import React, { Component } from 'react';

import Item from './Item'
import './Card.css'

class Card extends React.Component {
	constructor(props){
		super(props);
		this.state={
			select_items: {}
		};
        this.updateItem = this.updateItem.bind(this);
        this.print=''
	}

    updateItem(type, key, is_add){
        var temp_dic = this.state.select_items;
        if(is_add){
            temp_dic[type] = key;
        } else{
            delete temp_dic[type];
        }
        this.setState({select_items: temp_dic});
    }



	render(){
        var dic = this.state.select_items
		return(
            <div className="Card">
            <div>{JSON.stringify(dic)}</div>

            <Item className='name' updateCard={this.updateItem}/>
            <Item className='mana_cost' updateCard={this.updateItem}/>
            <Item className='rule_text' updateCard={this.updateItem}/>
            <Item className='edition' updateCard={this.updateItem}/>
            <Item className='rarity' updateCard={this.updateItem}/>
            <Item className='types' updateCard={this.updateItem}/>
			</div>
		)
	}
}

export default Card;
