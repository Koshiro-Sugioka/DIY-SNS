import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Post = ({id}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(id);


  
    useEffect(() => {
      const fetchPost = async () => {
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
          const res = await axios.get(`http://localhost:3000/api/posts/${id}`, config);
          setData(res.data);
        } catch (err) {
          setError('Error fetching data');
          console.error('Error fetching data', err.response.data);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPost();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div className='pt-28 text-2xl pl-8 pt-8 h-screen'>{error}</div>;
    }
  
    return (
      <div className='pt-28 pl-8 pt-8 flex-grow'>
        {data && (
        <>
        <div className='h-5/6'>
           <div className='text-6xl'>
            <h1><strong>{data.title}</strong> </h1>
        </div>
        <div className='text-3xl h-hull'>{data.body}</div> 
        </div>
        
        <div className='text-3xl'>Post by {data.author._id}</div>
          
        </>
      )}
      </div>
    );
  };

export default Post;

//http://localhost:3000/api/posts/6676df1a79d18a75a52f3ea7