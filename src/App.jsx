import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import CreatePost from './Pages/CreatePost';
import BlogDetailPage from './Pages/BlogDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [blogData, setBlogData] = useState([]);

  // Fetch blog posts from the JSON backend on mount
  useEffect(() => {
    fetch("http://localhost:5000/blogData")
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error("Error fetching blog data:", error));
  }, []);

  // Function to add a new blog post
  const addPost = async (newPost) => {
    try {
      const response = await fetch("http://localhost:5000/blogData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error("Failed to add post");
      }
      const addedPost = await response.json();
      // Update state so the new post appears on the homepage
      setBlogData(prevPosts => [addedPost, ...prevPosts]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage blogData={blogData} />} />
        <Route path="/blog/:id" element={<BlogDetailPage blogData={blogData} />} />
        <Route path="/create-post" element={<CreatePost addPost={addPost} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
