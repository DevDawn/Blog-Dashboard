import React from 'react';

const BlogPosts = ({ blogs }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
                {blogs.map(blog => (
                    <div key={blog.id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <div className="h-full bg-white rounded-lg overflow-hidden shadow-lg">
                            {blog.image && (
                                <img src={blog.image} alt={blog.title} className="lg:h-48 md:h-36 w-full object-cover object-center" />
                            )}
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.title}</h1>
                                <p className="leading-relaxed mb-3">{blog.content.length > 100 ? `${blog.content.slice(0, 100)}...` : blog.content}</p>
                                <h2 className="text-base text-indigo-500 font-semibold tracking-wide">{blog.author}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPosts;
