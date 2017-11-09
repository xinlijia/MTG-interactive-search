import React, { Component } from 'react';




class Item extends React.Component {
	constructor(props){
		super(props);
		this.state={
            type: props.className,
		    is_selected: false,
            value: '',
            print: 'add'
		};
        this.handleChange = this.handleChange.bind(this);
	}

    toggleSelect(){
        if(this.state.is_selected){
            this.setState({is_selected: false, print: 'add'})
            this.props.updateCard(this.state.type, '', false)
        }
        else{
            this.setState({is_selected: true, print: 'remove'})
            this.props.updateCard(this.state.type, this.state.value, true)
        }
    }

    handleChange(event){
        this.setState({value: event.target.value});

    }

	render(){
		return(
            <div className={this.props.className}>
            <form>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
            <button onClick={() => {this.toggleSelect()}}> {this.state.print}
            </button>
			</div>
		);
	}
}

export default Item;
