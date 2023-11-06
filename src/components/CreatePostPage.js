import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';


export default function CreatePostPage() {
  const navigate = useNavigate();
  const [content, setContent] = useState('')
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
    const data = {
      id: 0,
      content: content,
    };
    fetch("http://localhost:7070/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((note) => {
      })
      .catch((error) => {});
      
    }
  
  return (
    <div className='page'>
      <div className='container'>
        <div className='new-post'>
            <textarea style={{resize: 'none'}} onChange={(e) => {setContent(e.target.value)}}>
            </textarea>
            <button onClick={handleClick}>Опубликовать</button>
        </div>
      </div>
    </div>
  )
}
