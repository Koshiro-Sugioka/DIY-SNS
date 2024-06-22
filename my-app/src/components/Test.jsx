import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
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
          const res = await axios.get('http://localhost:3000/api/testAPI', config);
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
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <div>
        <h1>Fetched Data</h1>
        {data && (
        <div>
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>User:</strong> {JSON.stringify(data.user, null, 2)}</p>
        </div>
      )}
      </div>
    );
  };

export default Test;
