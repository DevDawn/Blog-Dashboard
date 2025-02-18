import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Homepage = ({ blogData }) => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
      {blogData.length !== 0 ? (
        blogData.map((blogPost) => (
          <div key={blogPost.id} className="shadow hover:shadow-lg rounded-xl m-3 relative bg-white">
            
            <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
              {blogPost.category}
            </div>

            <div className="w-full h-40 object-cover">
              <img src={blogPost.image} alt={blogPost.title} className="w-full h-40 rounded-t-xl" />
            </div>

            <div className="px-4 py-3">
              <Link to={`/blog/${blogPost.id}`} className="block hover:text-blue-800">
                <h1 className="font-bold text-md mb-2">{blogPost.title}</h1>
              </Link>
              <p className="text-sm text-ellipsis text-gray-600">{blogPost.content.slice(0, 100)}...</p>
              <p className="py-4 text-xs text-gray-800">{blogPost.published_date}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex h-screen w-full justify-center items-center">No blog post...</div>
      )}
    </div>
  );
};

export default Homepage;
