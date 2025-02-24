import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  
  const navigate = useNavigate();
  // Total steps is reduced by 1 since "Published Date" is removed.
  const totalSteps = 5;

  // Validate the field for the current step.
  const validateCurrentStep = () => {
    let fieldName = "";
    let errorMsg = "";
    switch (currentStep) {
      case 1:
        fieldName = "title";
        if (title.trim() === "") {
          errorMsg = "Title is required";
        } else if (title.trim().length < 5) {
          errorMsg = "Title must be at least 5 characters";
        } else if (title.trim().length > 100) {
          errorMsg = "Title must be at most 100 characters";
        }
        break;
      case 2:
        fieldName = "author";
        if (author.trim() === "") {
          errorMsg = "Author is required";
        }
        break;
      case 3:
        fieldName = "content";
        if (content.trim() === "") {
          errorMsg = "Content is required";
        } else if (content.trim().length < 5) {
          errorMsg = "Content must be at least 5 characters";
        }
        break;
      case 4:
        fieldName = "image";
        if (image.trim() === "") {
          errorMsg = "Image URL is required";
        }
        break;
      case 5:
        fieldName = "category";
        if (category === "") {
          errorMsg = "Category is required";
        }
        break;
      default:
        break;
    }
    if (errorMsg) {
      setErrors(prevErrors => ({ ...prevErrors, [fieldName]: errorMsg }));
      return false;
    } else {
      // Clear any existing error for this field.
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[fieldName];
        return newErrors;
      });
      return true;
    }
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate final step before submitting
    if (!validateCurrentStep()) return;
    
    const newPost = {
      id: uuidv4(),
      title,
      image,
      author: author || "Anonymous",
      // Automatically set the published_date to the current timestamp
      published_date: new Date().toISOString(),
      content,
      category,
    };

    try {
      await addPost(newPost);
      Swal.fire({
        title: "Congrats!",
        text: "Blog Created!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        }
      });

      // Reset form
      setTitle("");
      setImage("");
      setContent("");
      setAuthor("");
      setCategory("");
      setErrors({});
      setCurrentStep(1);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to create post", "error");
    }
  };

  // Updated steps without "Published Date"
  const steps = [
    { 
      label: "Title", 
      content: (
        <>
          <input 
            type="text" 
            placeholder="Enter Post Title" 
            className="mt-1 p-2 border border-blue-400 outline-blue-600 rounded w-full"
            value={title} 
            onChange={(event) => setTitle(event.target.value)}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </>
      )
    },
    { 
      label: "Author", 
      content: (
        <>
          <input 
            type="text" 
            placeholder="Enter Author Name" 
            className="mt-1 p-2 border border-blue-400 outline-blue-600 rounded w-full"
            value={author} 
            onChange={(event) => setAuthor(event.target.value)}
          />
          {errors.author && <p className="text-red-500">{errors.author}</p>}
        </>
      )
    },
    { 
      label: "Content", 
      content: (
        <>
          <textarea 
            placeholder="Enter Blog Content" 
            className="mt-1 p-2 border border-blue-400 outline-blue-600 rounded w-full"
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
            className="mt-1 p-2 border border-blue-400 outline-blue-600 rounded w-full"
            value={image} 
            onChange={(event) => setImage(event.target.value)}
          />
          {errors.image && <p className="text-red-500">{errors.image}</p>}
        </>
      )
    },
    { 
      label: "Category", 
      content: (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0">
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Entrepreneurship" 
                checked={category === "Entrepreneurship"} 
                onChange={() => setCategory("Entrepreneurship")} 
                className="cursor-pointer mr-1"
              /> 
              Entrepreneurship
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Technology" 
                checked={category === "Technology"} 
                onChange={() => setCategory("Technology")} 
                className="cursor-pointer mr-1" 
              /> 
              Technology
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Innovation" 
                checked={category === "Innovation"} 
                onChange={() => setCategory("Innovation")} 
                className="cursor-pointer mr-1"
              /> 
              Innovation
            </label>
          </div>
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </>
      )
    },
  ];

  return (
    <div className="bg-blue-300 px-4 sm:px-6 md:px-10 py-10 rounded-xl mx-auto my-20" style={{ maxWidth: '600px' }}>
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
