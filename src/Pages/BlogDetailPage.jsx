import React from 'react'
import { useParams, Link} from "react-router-dom"


const BlogDetailPage = ( {blogData} ) => {
  const {id} = useParams();
  const blogPost = blogData.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return(
      <div className="flex flex-col items-center justify-center h-screen text-xl">
        <p>Blog Post Not FOUND</p>
        <Link to="/" className="mt-5 px-4 py-2 bg-blue-600 text-white rounded">Back to Home</Link>
      </div>
    )
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-900">{blogPost.title}</h1>
      
      <div className='mt-5'>
        <img src={blogPost.image} alt={blogPost.title} className="w-full h-96 object-cover rounded-xl shadow-md"/>
        <div className="flex justify-between items-center">
      <p className="text-gray-600 text-sm mt-2">{blogPost.author}</p>
      <p className="text-gray-600 text-sm mt-2">{blogPost.published_date}</p>
      </div>
      </div>

      <div className="mt-6 text-lg  mb-20">
        <p>{blogPost.content}</p>
      </div>

      <div className="mt-6 flex justify-between items-center w-full mb-10">
  <div>
    <span className="px-4 py-2 bg-blue-900 text-white rounded-full">
      {blogPost.category}
    </span>
  </div>
  <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
    Back to Homepage
  </Link>
</div>

    </div>
  )
}

export default BlogDetailPage
