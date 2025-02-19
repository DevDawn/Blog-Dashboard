import React from 'react';
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BlogDetailPage = ({ blogData }) => {
  const { id } = useParams();
  // Compare IDs using parseInt to handle string vs. number mismatch
  const blogPost = blogData.find((post) => parseInt(post.id) === parseInt(id));

  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-xl">
        <p>Blog Post Not FOUND</p>
        <Link to="/" className="mt-5 px-4 py-2 bg-blue-600 text-white rounded">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-900">{blogPost.title}</h1>
      
      <div className="mt-5 relative">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-96 object-cover rounded-xl shadow-md"
        />

        {/* Back icon positioned at the top left */}
        <Link 
          to="/" 
          className="absolute top-4 left-4 text-white text-2xl bg-blue-600 p-2 rounded-full hover:bg-blue-800"
        >
          <FaArrowLeft />
        </Link>

        {/* Category label positioned at the top right */}
        <span className="absolute top-4 right-4 px-4 py-2 bg-blue-900 text-white rounded-full">
          {blogPost.category}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600 text-sm">{blogPost.author}</p>
        <p className="text-gray-600 text-sm">{blogPost.published_date}</p>
      </div>

      <div className="mt-6 text-lg mb-20">
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
