import React, { useState,useEffect } from "react";
import './../index.css';
import axios from 'axios';

function Article({ onClick }) {
  const [value,setValue] = useState([])

  const getValue = async () => {
    const headers = {
      'User-Agent': 'YourCustomUserAgent', // Set your custom User-Agent here
      'ngrok-skip-browser-warning': 'true', // Set your custom value for ngrok-skip-browser-warning
    };
    
    // Define the URL you want to send the request to
    const url = 'https://da84-103-162-237-227.ngrok-free.app/users'; // Replace with your API endpoint

    const response = await axios.get(url, {headers});
    setValue(response.data)
  };
  useEffect(() => {
      getValue();
  }, []);
  return (
    value.map((user,index)=>(
    <div key={index} className="Article w-96 bg-slate-50 p-6 rounded-lg flex-col m-5 shadow-xl transition transform hover:-translate-y-2
    motion-reduce:transition-none motion-reduce:hover:transform-none 
    cursor-pointer" onClick={() => onClick(user)}>
      <img className="rounded mb-3" src={user.img} alt="Sunset di pegunungan" />
      <h3 className='font-bold text-2xl mb-3'>{ user.title }</h3>
      <p>{user.paragraph.substring(0, 100)}...</p>
    </div>
  )));
}

export default Article;