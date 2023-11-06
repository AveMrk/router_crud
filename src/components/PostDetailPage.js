import React from 'react'
import { useLocation } from 'react-router-dom';

export default function PostDetailPage() {
  const {state} = useLocation();

  return (
    <article className="posts-item">
      <div className="post-author">
        <div className="post-author__photo"></div>
        <div className="post-author__desk">
          <div className="author-name">Ilnaz Gilyazov</div>
          <div className="author-text">
            <div className="author-text__post">Основатель группы</div>
            <div className="author-text__time">{state.posts.created}</div>
          </div>
        </div>
      </div>
      <div className="post-text">{state.posts.content}</div>
    </article>
  )
}
