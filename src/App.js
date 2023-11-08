import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import CreatePostPage from "./components/CreatePostPage";
import PostDetailPage from "./components/PostDetailPage";
import PostEditPage from "./components/PostEditPage";

export default function App() {
  /*const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((list) => setPosts(list));
  }, []);*/
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/posts/new" element={<CreatePostPage/>}/>
        <Route exact path="/posts/:id" element={<PostDetailPage/>}/>
        <Route exact path="/posts/edit/:id" element={<PostEditPage/>}/>
      </Routes>
    </div>
  );
}
