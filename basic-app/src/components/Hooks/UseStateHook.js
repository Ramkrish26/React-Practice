import { useState } from "react";

import React from 'react'

function UseStateHook() {

    const initCount = 0;
    const initName = {fName:'',lName:''}
    
    const [count,setCount] = useState(initCount)
    const [name,setName] = useState(initName)

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button><br/>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button><br/>
            <button onClick={() => setCount(initCount)}>Reset</button>
            <h1>Name : {name.fName} {name.lName}</h1>
            <label>First Name</label>
            <input type='text' value={name.fName} onChange={e => setName({...name, fName:e.target.value})}/>
            <label>Last Name</label>
            <input type='text' value={name.lName} onChange={e => setName({...name, lName:e.target.value})}/>
        </div>
    )
}

export default UseStateHook
