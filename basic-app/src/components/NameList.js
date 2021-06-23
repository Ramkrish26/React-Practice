import React from 'react'

function NameList() {
    const names = ['Ram','krish','Damon', 'Stefan']
    return (
        <div>
            <h1>{names.map(x => {
                return <div key={x}>{x}</div>
            })}</h1>
        </div>
    )
}

export default NameList
