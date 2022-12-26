import React, { useState , useEffect} from 'react'

function MouseEventListener() {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [display,setDisplay] = useState(true)

    const logMousePointer = e => {
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(() => {
        console.log('Use effect hook')
        window.addEventListener('mousemove',logMousePointer)
    })

    return (
        <div>
            {display && <h1>The mouse position is ({x},{y})</h1>}
            <button onClick={()=>setDisplay(!display)}>Show content</button>                        
        </div>
    )
}

export default MouseEventListener
