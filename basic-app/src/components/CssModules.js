import React from 'react'
import styles from  '../css/stylesModule.module.css'

function CssModules() {
    return (
        <div>
            <h1 className = {styles.error}>Error</h1>
            <h1 className = {styles.success}>Success</h1>
        </div>
    )
}

export default CssModules
