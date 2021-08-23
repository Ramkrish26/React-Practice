import React from 'react'

const withCounter = OriginalComp => {
     class withCounter extends React.Component {      

        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
    
        incrementCounter = () => {
            this.setState(
                {
                    count : this.state.count+1
                }
            )
        }

        render() {
            return (
                <OriginalComp count = {this.state.count} incrementCounter = {this.incrementCounter}/>
            )
        }
    }
    
    return withCounter    
}

export default withCounter