import React, { Component } from 'react'
import withCounter from './withCounter'

class Counter extends Component {

    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h1>Counter d- {count}</h1>
                <button onClick = {incrementCounter}>Increment</button>
            </div>
        )
    }
}

export default withCounter(Counter)
