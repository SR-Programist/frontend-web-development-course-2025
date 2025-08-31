import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../data/data';

export default function BlogDetails() {
    let { slug } = useParams();
    let post = posts.filter((v)=> v.id == slug);
    return (
        <div className='post'>
            <h2>{post[0].title}</h2>
            <p>{post[0].des}</p>
        </div>
    )
}
