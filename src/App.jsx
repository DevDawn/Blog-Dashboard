import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import BlogPosts from './Components/BlogPosts';
import CreatePost from './Components/CreatePosts';
import EditPosts from './Components/EditPosts';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Tech is the new Oil Well", content: "This is the first post", author: "Dawn Cobham", image: "https://pbs.twimg.com/media/GZIyIxNWkAAgp3g?format=jpg&name=large" },
  { id: 2, title: "Innovation ", content: "When innovation meets talent you are bound and if combined with hardwork results will tell great storties", author: "Oyo Effiom", image: "https://sentrytimes.com/wp-content/uploads/2023/09/3947C721-79E7-43ED-9099-FCE786348622.jpeg" },
    {
      id: 3,
      title: "The Gift of Men",
      content: "Always grateful for the set of young people God Blessed us with.",
      author: "Emmanuel Bassey",
      image: "https://crossriverwatch.com/wp-content/uploads/2024/01/IMG_20240131_190509.jpg" 
    }
  ]);

  const handleAddBlogPost = (newPost) => {
    setBlogs([{ ...newPost, id: blogs.length + 1 }, ...blogs]);
  };

  const handleDeleteBlogPost = (postId) => {
    setBlogs(blogs.filter(blog => blog.id !== postId));
  };

  const handleEditBlogPost = (updatedPost) => {
    const updatedBlogs = blogs.map(blog => blog.id === updatedPost.id ? updatedPost : blog);
    setBlogs(updatedBlogs);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className='dashboard h-screen flex'>
          <Sidebar />
          <div className="content flex-grow p-8">
            <Routes>
              <Route path="/" element={<BlogPosts blogs={blogs} />} />
              <Route path="/posts" element={<BlogPosts blogs={blogs} />} />
              <Route path="/create-post" element={<CreatePost onSave={handleAddBlogPost} />} />
              <Route path="/edit-posts" element={<EditPosts blogs={blogs} onDelete={handleDeleteBlogPost} onEdit={handleEditBlogPost} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
