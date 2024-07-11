import React, { useState, useEffect } from 'react';
import axios from './axiosInstance.js';

export default function Search() {
  const [usernames, setUsernames] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await axios.get('api/users/allusers'); 
        setUsernames(response.data.message);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching all usernames:', error);
      }
    };

    fetchUsernames();
  }, []);

  const handleSelection = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a user:
        <select value={selectedUser} onChange={handleSelection}>
          <option value="" disabled>Select a username</option>
          {usernames.map((user) => (
            <option key={user._id} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
