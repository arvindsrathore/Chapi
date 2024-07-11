import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from './axiosInstance.js';

export default function EnterPage() {

    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const navigate = useNavigate();
    const handlesubmit = async(e) => {
      e.preventDefault();
      try {
          const response = await axios.post('api/users/setuser', { username, password });
          console.log(response.data.message);
          if (response.data.status === 'success') {
              navigate('/instantmessaging');
          } else {
              console.log('Unsuccessful');
          }
      } catch (error) {
          console.error('Error submitting form:', error);
      }
    }
  return (
    <div>
        <h1>Enter Your Name</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" name="username" placeholder="Your Username" onChange={(e) => setusername(e.target.value)} required />
            <br/>
            <input type="text" name="password" placeholder="Your Password" onChange={(e) => setpassword(e.target.value)} required />
            <br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
