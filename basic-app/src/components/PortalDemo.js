import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            footer content
        </div>,
        document.getElementById('footer')
    )
}

export default PortalDemo
