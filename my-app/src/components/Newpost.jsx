// src/components/Register.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Newpost = () => {
const { authState } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate(); 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Retrieve token from storage
        if (!token) {
          setError('No token found, please login');
          setLoading(false);
          return;
        }
  
        const config = {
          headers: {
            'Authorization': `${token}` // Include token in the Authorization header
          }
        };
    try {
      const res = await axios.post('http://localhost:3000/api/posts/', formData, config);
      if (res.data) {
        console.log(res.data.message); // Log the success message
        navigate('/'); // Redirect to the home page after successful registration
      } else {
        console.error('Registration failed:', res.data.message);
      }
    } catch (err) {
        console.error(err.response ? err.response.data : err.message);
    }
  };

return (
    <div>
         {authState.isAuthenticated ? (
    <form onSubmit={onSubmit}>
    <div class="flex justify-center items-center h-screen bg-yellow-500">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>New Post</h1>
            <div class="mt-3">
                <label for="title" class="block text-base mb-2">Title</label>
                <input value={email} type="title" name="title" id="title" onChange={onChange} class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
            </div>
            <div class="mt-3">
                <label for="body" class="block text-base mb-2">Body</label>
                <input value={password} type="body" name="body" id="body" onChange={onChange} class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="" />
            </div>
            <div class="mt-5">
                
                <>
                <button type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Post</button>
                </>
                
            </div>
        </div>
    </div>
    </form>
    ) : (
        <div>
            <h1>Not Logged In</h1>
        </div>
    )
    }
    </div>
   
  )
  
};

export default Newpost;
