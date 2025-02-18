import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
    const handleCreatePost = () => {
        navigate('/create-post')
    }
    
    const handleHomepage = () => {
        navigate('/')
    }

    // const handleBlogDetails = () => {
    //     navigate('/blog/id')
    // }
  return (
    <div className='flex justify-between items-center px-4 py-4 text-white bg-blue-900'>
      <h1 className='cursor-pointer text-3xl font-bold'onClick={handleHomepage}>Logo</h1>

      {/* <p className='cursor-pointer' onClick={handleBlogDetails}>Blog Details</p> */}

      <button className='cursor-pointer px-2 py-3 bg-blue-950 rounded-2xl hover:bg-blue-800' onClick={handleCreatePost}>Create Post</button>
    </div>
  )
}

export default Header
