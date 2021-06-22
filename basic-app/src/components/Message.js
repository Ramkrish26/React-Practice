import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : 'Welcome Visitor',
            disabled : false
        }
    }

    changeMessage(){
        this.setState (
            {
                message : 'Thank you for subscribing',
                disabled : true
            }
        )
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()} disabled = {this.state.disabled}>Subscribe</button>
            </div>
        )
    }
}

export default Message