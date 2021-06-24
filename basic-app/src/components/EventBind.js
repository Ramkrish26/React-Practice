import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }

        // this.eventHandler = this.eventHandler.bind(this)
    }

    // eventHandler(){
    //     this.setState({
    //         message : 'goodbye'
    //     })
    // }

    eventHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Using bind method
                <button onClick = {() => this.eventHandler()}>Click event bind</button> */}
                {/* Using arrow functions
                <button onClick = {this.eventHandler.bind(this)}>Click event bind</button> */}
                {/* Using the bind method in constructor and declaring event handlers in arrow function*/}
                <button onClick = {this.eventHandler}>Click event bind</button> 
            </div>
        )
    }
}

export default EventBind
