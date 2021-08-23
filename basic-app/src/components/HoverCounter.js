import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    
    render() {
        const {count,incrementCounter} = this.props

        return (
            <div>
                <h1>Counter hove- {count}</h1>
                <h2 onMouseOver = {incrementCounter}>Increment</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter)