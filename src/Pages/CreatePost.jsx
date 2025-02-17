import React, { useState } from 'react';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
  
    if (title === "") {
      newErrors.title = "Title is required";
    } else if (title.length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    } else if (title.length > 100) {
      newErrors.title = "Title must be at most 100 characters";
    }
  
    if (content === "") {
      newErrors.content = "Content is required";
    } else if (content.length < 5) {
      newErrors.content = "Content must be at least 5 characters";
    }
  
    if (image === "") {
      newErrors.image = "Image is required";
    }
  
    if (date === "") {
      newErrors.date = "Date is required";
    }
  
    if (category === "") {
      newErrors.category = "Category is required";
    }
  
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
    } else {
      alert("Blog Sent");
    }
  };

  return (
    <div className='bg-blue-300 px-10 py-10 rounded-xl mx-auto my-20' style={{ maxWidth: '600px' }}
    >
      <form onSubmit={handleSubmit}>
        <h1 className='text-3xl text-center font-bold text-blue-900'>Create Blog</h1>
        <div className='flex flex-col mt-5'>
          <label className='font-bold'>Title:</label>
          <input type="text" placeholder='Enter Post Title' className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded" value={title} onChange={(event)=>setTitle(event.target.value)}/>
          {errors.title && <p className='text-red-500'>{errors.title}</p>}
        </div>
        <div className='flex flex-col mt-5'>
          <label className='font-bold'>Content:</label>
          <textarea placeholder='Enter Blog Content' className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded" value={content} onChange={(event)=>setContent(event.target.value)}/>
          {errors.content && <p className='text-red-500'>{errors.content}</p>}
        </div>
        <div className='flex flex-col mt-5'>
          <label className='font-bold'>Enter Image URL:</label>
          <input type="url" placeholder='Image URL' className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded" value={image} onChange={(event)=>setImage(event.target.value)}/>
          {errors.image && <p className='text-red-500'>{errors.image}</p>}
        </div>
        <div className='flex flex-col mt-5'>
          <label className='font-bold'>Published Date:</label>
          <input type="date" className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded" value={date} onChange={(event)=>setDate(event.target.value)}/>
          {errors.date && <p className='text-red-500'>{errors.date}</p>}
        </div>
        <div className='mt-5'>
          <label className='font-bold'>Category:</label>
          <div className="flex justify-between">
            <label>
              <input type="radio" value="Entrepreneurship" checked={category === "Entrepreneurship"} onChange={() => setCategory("Entrepreneurship")} className='cursor-pointer'/> Entrepreneurship
            </label>
            <label>
              <input type="radio" value="Technology" checked={category === "Technology"} onChange={() => setCategory("Technology")} className='cursor-pointer' /> Technology
            </label>
            <label>
              <input type="radio" value="Innovation" checked={category === "Innovation"} onChange={() => setCategory("Innovation")} className='cursor-pointer'/> Innovation
            </label>
          </div>
          {errors.category && <p className='text-red-500'>{errors.category}</p>}
        </div>
        <button type="submit" className="mt-8 w-full py-3 bg-blue-900 text-white rounded cursor-pointer">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
