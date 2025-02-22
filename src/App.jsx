import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import CreatePost from './Pages/CreatePost';
import BlogDetailPage from './Pages/BlogDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';

const App = () => {
  const [blogData, setBlogData] = useState([]);

  // Fetch blog posts from Supabase on mount
  useEffect(() => {
    async function loadBlogPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*');
      if (error) {
        console.error("Error fetching blog data:", error);
      } else {
        setBlogData(data);
      }
    }
    loadBlogPosts();
  }, []);

  // Function to add a new blog post via Supabase
  const addPost = async (newPost) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert(newPost)
        .select(); // Add .select() to return inserted rows
      if (error) {
        throw new Error(error.message);
      }
      // data returns an array of inserted rows, so we take the first one
      setBlogData(prevPosts => [data[0], ...prevPosts]);
    } catch (error) {
      console.error("Error adding post:", error);
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
