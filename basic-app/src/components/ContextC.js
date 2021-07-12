import React, { Component } from 'react'
import { UserContextConsumer } from './ContextUser'

class ContextC extends Component {
    render() {
        return (
            <UserContextConsumer>
                {
                    (userName) => <div>Hi from {userName} in context</div> 
                }
            </UserContextConsumer>
        )
    }
}

export default ContextC
