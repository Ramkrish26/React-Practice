import React, { Component } from 'react'
import { UserContextConsumer , LoginContextConsumer} from './ContextUser'

class ContextC extends Component {
    render() {
        return (
            <div>
                <UserContextConsumer>
                {
                    (userName) => {
                        return(
                            <LoginContextConsumer>
                                {
                                    (login) => {
                                         return (
                                            <div>Hi from {userName} in context is {login}</div>
                                         )
                                    }
                                }
                            </LoginContextConsumer>
                        )
                    } 
                }
            </UserContextConsumer>
            </div>            
        )
    }
}

export default ContextC
