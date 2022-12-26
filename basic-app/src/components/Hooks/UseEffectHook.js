import React,{useEffect, useState} from 'react'

function UseEffectHook() {

    const [count,setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `Title is changed ${count}`;
        console.log('Title is changed')
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Click to update title</button>
        </div>
    )
}

export default UseEffectHook
