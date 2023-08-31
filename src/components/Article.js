import React, { useState,useEffect } from "react";
import './../index.css';
import axios from 'axios';

function Article() {
  const [value,setValue] = useState([])
  const getValue = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setValue(response.data)
  };
  useEffect(() => {
      getValue();
  },[]);
  return (
    value.map((user,index)=>(
    <div className="Article w-96 bg-slate-50 p-6 rounded-lg flex-col m-5 shadow-xl transition transform hover:-translate-y-2
    motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer">
      <img className="rounded mb-3" src={user.img} alt="Sunset di pegunungan" />
      <h3 className='font-bold text-2xl mb-3'>{ user.title }</h3>
      <p>{user.paragraph}</p>
    </div>
  )));
}

export default Article;