// Functional Component
import React from 'react'

// JSX format below
 const Greet = (props) => {
     return (<div>
        <h1>Hi {props.name}</h1>
        {/* Below Code will render the html content placed inside the component tag */}
        {props.children}
    </div>);    
} 

// Without JSX format
// const Greet = () => {
//     return React.createElement('div',null,React.createElement('h1',{id:'header1'},'Hi Ram Krish!'))
// }
export default Greet