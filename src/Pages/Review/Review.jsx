import React, { useEffect, useState } from 'react'

const Review = () => {  
    const [posts, setPosts] = useState(null)
    const obtenerPost = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        })
        const posts = await response.json()
        setPosts(posts)
    }
    useEffect(()=> {
        obtenerPost()
    },[])

    console.log(posts)
  return (
    <div>
        {posts && posts.map(post =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr />
            </div>    
        )}
    </div>
  )
}

export default Review