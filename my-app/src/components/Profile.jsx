import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Profile = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        console.log("hhhhh")
      const fetchData = async () => {
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
          const res = await axios.get('http://localhost:3000/api/auth/me', config);
          setData(res.data);
        } catch (err) {
          setError('Error fetching data');
          console.error('Error fetching data', err.response.data);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    console.log(data);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }

    return (
        <div className="pt-20 bg-grey-300 text-grey h-96 w-full flex items-center">
            <div className='text-3xl mx-10'>
                <h1>Email: {data.email}</h1>
                <h1>ID: {data._id}</h1>
                </div>
        </div>
    );
}

export default Profile;