import React, {useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import CreatePost from './Pages/CreatePost';
import BlogDetailPage from './Pages/BlogDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    const [blogData, setBlogData] = useState([
      {
        id: 2,
        title: "Making wearable medical devices more patient-friendly",
        image: "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
        author: "Darrell Etherington",
        published_date: "2023-10-01",
        content: "Welcome back to Found, where we get the stories behind the startups...",
        category: "Technology",
      },
      {
        id: 4,
        title: "Rainforest raises $8.5M to help software companies embed financial services",
        image: "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
        author: "Mary Ann Azevedo",
        published_date: "2023-10-01",
        content: "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared...",
        category: "Innovation",
      }
    ])
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage blogData={blogData} />} />
        <Route path="/blog/:id" element={<BlogDetailPage blogData={blogData} />} />
        <Route path="/create-post" element={<CreatePost setBlogData={setBlogData} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
