import React, { useState, useEffect } from 'react';
import { supabase } from "../supabaseClient"; // Adjust the path as needed
import { FaUserCircle, FaRegClock } from 'react-icons/fa';

const Comments = ({ blogPostId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch comments for the blog post
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('blog_post_id', blogPostId)
        .order('created_at', { ascending: true });
      if (error) {
        console.error('Error fetching comments:', error);
      } else {
        setComments(data);
      }
    };

    fetchComments();
  }, [blogPostId]);

  // Handle new comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    const finalAuthor = author.trim() === '' ? "Anonymous" : author.trim();

    const { data, error } = await supabase
      .from('comments')
      .insert([{ blog_post_id: blogPostId, author: finalAuthor, content: newComment }])
      .select();

    if (error) {
      console.error('Error adding comment:', error);
    } else {
      setComments([...comments, data[0]]);
      setNewComment('');
      setAuthor('');
    }
  };

  return (
    <div>
      {/* Existing Comments Section */}
      <div className='mb-10'>
        <h3 className="text-2xl font-bold mb-6 text-blue-700 py-2 rounded">
          Comments
        </h3>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-center text-blue-500">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="p-4 bg-blue-50 rounded-lg shadow border border-blue-200">
                <div className="flex items-center mb-2">
                  <FaUserCircle className="text-blue-500 mr-2" size={24} />
                  <span className="font-semibold text-blue-700">{comment.author}</span>
                  <span className="flex items-center text-sm text-blue-500 ml-auto">
                    <FaRegClock className="mr-1" />
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                </div>
                <p className="text-blue-800">{comment.content}</p>
              </div>
            ))
          )}
        </div>
      </div>


      <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-300 mb-20">
        <h3 className="text-2xl font-bold mb-6 text-blue-700 py-2 rounded text-center">
          Leave a Comment
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-blue-700">
              Name
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your Name"
              className="mt-1 block w-full p-2 rounded-md border border-blue-300 shadow-sm outline-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-blue-700">
              Comment
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment..."
              rows="4"
              className="mt-1 block w-full p-2 rounded-md border border-blue-300 shadow-sm outline-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex cursor-pointer justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
