import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreatePost = ({ setBlogData }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  
  const navigate = useNavigate(); // Initialize navigate

  const totalSteps = 5;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (title === "") newErrors.title = "Title is required";
    else if (title.length < 5) newErrors.title = "Title must be at least 5 characters";
    else if (title.length > 100) newErrors.title = "Title must be at most 100 characters";

    if (content === "") newErrors.content = "Content is required";
    else if (content.length < 5) newErrors.content = "Content must be at least 5 characters";

    if (image === "") newErrors.image = "Image is required";
    if (date === "") newErrors.date = "Date is required";
    if (category === "") newErrors.category = "Category is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Swal.fire({
        title: "Incomplete Blog Details",
        text: "No Blog Created!",
        icon: "error",
      });
    } else {
      const newPost = {
        id: Date.now(),
        title,
        image,
        author: "Anonymous",
        published_date: date,
        content,
        category,
      };

      // Add new post to homepage
      setBlogData((prevPosts) => [newPost, ...prevPosts]);

      Swal.fire({
        title: "Congrats!",
        text: "Blog Created!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/'); // Navigate after clicking "OK"
        }
      });

      // Reset form
      setTitle("");
      setImage("");
      setContent("");
      setDate("");
      setCategory("");
      setErrors({});
      setCurrentStep(1);
    }
  };

  // Steps for pagination
  const steps = [
    { 
      label: "Title", 
      content: (
        <>
          <input 
            type="text" 
            placeholder="Enter Post Title" 
            className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded w-full"
            value={title} 
            onChange={(event) => setTitle(event.target.value)}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </>
      )
    },
    { 
      label: "Content", 
      content: (
        <>
          <textarea 
            placeholder="Enter Blog Content" 
            className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded w-full"
            value={content} 
            onChange={(event) => setContent(event.target.value)}
          />
          {errors.content && <p className="text-red-500">{errors.content}</p>}
        </>
      )
    },
    { 
      label: "Image URL", 
      content: (
        <>
          <input 
            type="url" 
            placeholder="Image URL" 
            className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded w-full"
            value={image} 
            onChange={(event) => setImage(event.target.value)}
          />
          {errors.image && <p className="text-red-500">{errors.image}</p>}
        </>
      )
    },
    { 
      label: "Published Date", 
      content: (
        <>
          <input 
            type="date" 
            className="mt-1 p-2 border-3 border-blue-400 outline-blue-600 rounded w-full"
            value={date} 
            onChange={(event) => setDate(event.target.value)}
          />
          {errors.date && <p className="text-red-500">{errors.date}</p>}
        </>
      )
    },
    { 
      label: "Category", 
      content: (
        <>
          <div className="flex justify-between">
            <label>
              <input 
                type="radio" 
                value="Entrepreneurship" 
                checked={category === "Entrepreneurship"} 
                onChange={() => setCategory("Entrepreneurship")} 
                className="cursor-pointer"
              /> Entrepreneurship
            </label>
            <label>
              <input 
                type="radio" 
                value="Technology" 
                checked={category === "Technology"} 
                onChange={() => setCategory("Technology")} 
                className="cursor-pointer" 
              /> Technology
            </label>
            <label>
              <input 
                type="radio" 
                value="Innovation" 
                checked={category === "Innovation"} 
                onChange={() => setCategory("Innovation")} 
                className="cursor-pointer"
              /> Innovation
            </label>
          </div>
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </>
      )
    },
  ];

  // Navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-blue-300 px-10 py-10 rounded-xl mx-auto my-20" style={{ maxWidth: '600px' }}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center font-bold text-blue-900">Create Blog</h1>
        <p className="text-center text-blue-900 font-bold mt-2">{currentStep} / {totalSteps}</p>
        <div className="flex flex-col mt-5">
          <label className="font-bold">{steps[currentStep - 1].label}:</label>
          {steps[currentStep - 1].content}
        </div>
        <div className="flex justify-between mt-5">
          {currentStep > 1 && (
            <button 
              onClick={prevStep} 
              type="button" 
              className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button 
              onClick={nextStep} 
              type="button" 
              className="px-4 py-2 bg-blue-900 text-white rounded cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button 
              type="submit" 
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
