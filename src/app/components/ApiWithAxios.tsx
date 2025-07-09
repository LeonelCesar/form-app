"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

type Repository = { 
  id: number,
  name: string,
  userName: string,
  email: string,
}

function ApiWithAxios() {
  const [feteData, setFeteData] = useState<Repository[]>([]); 

  useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      setFeteData(response.data)
    })
  }, [])
 
  
  return (
    <div className="">
      <h4>API Axios</h4>
      {feteData.map((item) => {
        return(
          <div key={item.id}>
            <h2 className='text-red-50 text-2xl'>{item.name}</h2>
            <h3 className='text-red-100 text-1.5'>{item.userName}</h3>
            <h4 className='text-red-200 text-sm'>{item.email}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default ApiWithAxios;
