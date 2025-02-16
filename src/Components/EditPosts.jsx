// src/components/EditPosts.jsx
import React from 'react';

const EditPosts = ({ blogs, onDelete, onEdit }) => {
    return (
        <div className="space-y-4">
            {blogs.map(blog => (
                <div key={blog.id} className="bg-white shadow-lg rounded-lg p-4">
                    {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />}
                    <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
                    <p className="text-gray-700">{blog.content}</p>
                    <div className="flex justify-end space-x-2">
                        <button onClick={() => onEdit(blog.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                        <button onClick={() => onDelete(blog.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default EditPosts;


// import React from 'react';

// const EditPosts = ({ blogs, onDelete, onEdit }) => {
//     // Render each blog post with edit and delete options
//     return (
//         <div className="space-y-4">
//             {blogs.map(blog => (
//                 <div key={blog.id} className="bg-white shadow-lg rounded-lg p-4">
//                     {blog.image && (
//                         <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
//                     )}
//                     <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
//                     <p className="text-gray-700">{blog.content}</p>
//                     <div className="flex justify-end space-x-2">
//                         {/* Edit button triggers the onEdit function, passing the blog object */}
//                         <button 
//                             onClick={() => onEdit(blog)} 
//                             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                             Edit
//                         </button>
//                         {/* Delete button triggers the onDelete function, passing the blog's id */}
//                         <button 
//                             onClick={() => onDelete(blog.id)} 
//                             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//                             Delete
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default EditPosts;
