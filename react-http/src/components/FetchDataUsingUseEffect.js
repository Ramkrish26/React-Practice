import React ,{useEffect, useState} from 'react'
import axios from 'axios'

function FetchDataUsingUseEffect() {

    const [post, setPost] = useState([])

    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
        },[]
    )

    return (
        <div>
            <ul>
                {post.map(pos => {
                    return <li key={pos.id}>{pos.title}</li>
                })}
            </ul>
        </div>
    )
}

export default FetchDataUsingUseEffect
