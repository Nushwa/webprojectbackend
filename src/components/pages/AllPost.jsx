import React from 'react'
import Post from "../Post"
import "../../stylesheets/posts.css"

export default function AllPost({posts}) {
  return (
    <div className="posts">
        {posts.map((p) => (
          <Post />
        ))}
    </div>
  )
}
