import React, { Component } from 'react'

class MountingLifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Ram'
        }
        console.log('Constructor lifecycle')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Get Derived state from porps')
        return null;
    }

    componentDidMount(){
        console.log('Component did mount')
    }
    
    render() {
        console.log('Component render')
        return (
            <div>
                Mounting lifecycle
            </div>
        )
    }
}

export default MountingLifecycle
