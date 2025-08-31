import React from 'react'
import { posts } from '../data/data'
import { Link } from 'react-router-dom';

export default function Blog() {
    let data = posts;
  return (
    <div>
        <div className="container">
            {
                data.map((v , i)=>{
                    return(
                        <div key={i}>
                            <h2>{v.title}</h2>
                            <p>{v.des}</p>
                            <Link to={`/blog/${v.id}`}>Read More</Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
