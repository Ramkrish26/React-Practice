import React from 'react'
import Table from './Table'

function Fragments() {
    return (
        <React.Fragment>
            <h1>Fragment demo</h1>
            <p>Fragement does not retricts the user with sinle parent node</p>
            <Table/>
        </React.Fragment>
    )
}

export default Fragments
