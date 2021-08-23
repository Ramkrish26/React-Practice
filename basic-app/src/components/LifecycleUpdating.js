import React, { Component } from 'react'

class LifecycleUpdating extends Component {

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

    shouldComponentUpdate(){
        console.log('Should component update')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Getting snapshot before update')
        console.log(`${prevProps} 
        ${prevState}`)
        return null
    }

    changeState = () => {
        this.setState({
            name : 'Krish'
        })
    }
    
    render() {
        console.log('Component render')
        return (
            <div>
                 <h1>Updating lifecycle</h1>
                <button onClick={this.changeState}>Update Lifecycle</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('Component did mount')
    }

    componentDidUpdate(){
        console.log('Component did update')
    }
}

export default LifecycleUpdating
