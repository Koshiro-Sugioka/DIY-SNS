// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate(); 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', formData);
      if (res.data.success) {
        console.log(res.data.message); // Log the success message
        navigate('/login'); // Redirect to the home page after successful registration
      } else {
        console.error('Registration failed:', res.data.message);
      }
    } catch (err) {
        console.error(err.response ? err.response.data : err.message);
    }
  };

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
//       </div>
//       <div>
//         <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
//       </div>
//       <div>
//         <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
return (
    <form onSubmit={onSubmit}>
    <div class="flex justify-center items-center h-screen bg-yellow-500">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>Signup</h1>
            <div class="mt-3">
                <label for="email" class="block text-base mb-2">Email</label>
                <input value={email} type="text" name="email" id="email" onChange={onChange} class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
            </div>
            <div class="mt-3">
                <label for="password" class="block text-base mb-2">Password</label>
                <input value={password} type="password" name="password" id="password" onChange={onChange} class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
            </div>
            <div class="mt-5">
                
                <>
                <button type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Signup</button>
                </>
                
            </div>
        </div>
    </div>
    </form>
  )
  
};

export default Signup;
