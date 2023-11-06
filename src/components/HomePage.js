import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((list) => {
        setPosts(list)
      console.log(posts)});
  }, []);
  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((list) => {
        setPosts(list)});
  }, [posts]);
  const now =new Date().getMinutes();
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <Link to="/posts/new">Создать пост</Link>
        </div> 
        <div className="posts">
          {posts.map((item) => (
            <Link key={item.id} to={{
              pathname: `/posts/${item.id}`,
              state: {posts: item}
              }}>
              <article className="posts-item">
                <div className="post-author">
                  <div className="post-author__photo"></div>
                  <div className="post-author__desk">
                    <div className="author-name">Ilnaz Gilyazov</div>
                    <div className="author-text">
                      <div className="author-text__post">Основатель группы</div>
                      <div className="author-text__time">{now-item.created}</div>
                    </div>
                  </div>
                </div>
                <div className="post-text">{item.content}</div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
