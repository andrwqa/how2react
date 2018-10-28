import React, { Component } from 'react';


export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            inputArray: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        const inputArray = this.state.value.split(/[ ,]+/).filter(Boolean);
        this.setState({
            inputArray: inputArray
        })
    }


      
    
    render() {
        let firstItem, lastItem;
        if(this.state.inputArray.length > 0){
            firstItem = '[';
            lastItem = ']';
        }
        //const input = this.state.value.split(/[ ,]+/).filter(Boolean);
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Type anything here" /><br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>Your input:</h1>
                <ul>
                    <li>{firstItem}</li>
                    {this.state.inputArray.join(', ')}
                    <li>{lastItem}</li>
                </ul>
            </div>
        );
    }
}
