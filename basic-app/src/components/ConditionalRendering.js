import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: false,
            buttonEnabled : false
        }

        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState (
            {
                isLoggedin: true,
                buttonEnabled : true
            } 
        )        
    }

    getMessage(){
        if (this.state.isLoggedin) {
            return <div>Welcome Ram krish</div>
        } else {
            return <div>Welcome Guest</div>
        }
    }

    render() {
        let message = this.getMessage()

        return (
            <div>                        
                <div>{message}</div>
                <button onClick = {this.changeState} disabled = {this.state.buttonEnabled}>Sign In</button>                
            </div>
        )
    }
}

export default ConditionalRendering