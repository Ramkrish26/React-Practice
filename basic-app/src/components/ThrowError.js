import React from 'react'

function ThrowError({heroName}) {
    if(heroName === "Ram")
        throw new Error('Not a hero') 
    
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ThrowError
