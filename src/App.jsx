import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import CreatePost from './Pages/CreatePost';
import BlogDetailPage from './Pages/BlogDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
