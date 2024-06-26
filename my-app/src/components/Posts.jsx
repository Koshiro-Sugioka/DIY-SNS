import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import axios from 'axios';

const Posts = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        console.log("hhhhh")
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
          const res = await axios.get('http://localhost:3000/api/posts', config);
          setData(res.data);
          console.log(res);
        } catch (err) {
          setError('Error fetching data');
          console.error('Error fetching data', err.response.data);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div className='text-2xl pl-8 pt-8 h-screen'>{error}</div>;
    }


  return (
    <div>
        <div className='text-2xl pl-8 pt-8 h-full'>Posts</div>
        <div className='w-full bg-[#ffffff] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>

                {data.map((blog)=>
                <Link key={blog._id} to={`/posts/${blog._id}`}>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?cs=srgb&dl=pexels-pixabay-209235.jpg&fm=jpg" />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                            {/* <p className='text-gray-600 text-xl'>{blog.body}</p> */}
                            <p className='text-gray-600 text-xl'>by {blog.author}</p>
                        </div>
                    </div>
                </Link>          
                )}
            </div>

        </div>
    </div>
    </div>
    
  )
}

export default Posts