import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function PostDetailPage() {
  const {id} = useParams ();
  const [post, setPost] =useState({});
  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json())
      .then((post) => setPost(post.post));
  }, []);
  console.log(id, post);
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/');
  }
  return (
    <article className="posts-item">
      <div className="post-author">
        <div className="post-author__photo"></div>
        <div className="post-author__desk">
          <div className="author-name">Ilnaz Gilyazov</div>
          <div className="author-text">
            <div className="author-text__post">Основатель группы</div>
            <div className="author-text__time">{post.created}</div>
          </div>
        </div>
      </div>
      <div className="post-text">{post.content}</div>
      <Link to={{
        path: `/posts/edit/${id}`
      }}>Edit</Link>
      <button onClick={handleClick}></button>
    </article>
  )
}
