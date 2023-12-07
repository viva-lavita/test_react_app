import React from "react";
import PostItems from "./PostItems";


const PostList = ({posts, title, remove}) => {
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => 
                <PostItems remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList