// src/components/CreatePost.jsx
import React, { useState } from 'react';

const CreatePost = ({ onSave }) => {
    const [post, setPost] = useState({ title: '', content: '', author: '', image: '' });

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(post);
        setPost({ title: '', content: '', author: '', image: '' }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow">
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="Title" 
                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Content</label>
                <textarea name="content" value={post.content} onChange={handleChange} placeholder="Content"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input type="text" name="author" value={post.author} onChange={handleChange} placeholder="Author"
                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input type="text" name="image" value={post.image} onChange={handleChange} placeholder="Image URL"
                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Post</button>
        </form>
    );
}
export default CreatePost;
