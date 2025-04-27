"use client";

import { useEffect, useState }  from "react";

type Repository = {
  id: number,
  name: string, 
  email: string,
  addres: string,
}

function ApiWithReact() {
  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data) => {
        setData(data);
      })
    }, []);

  return (
    <div className="">
      <h4>API Recat Normal</h4>
      {data.map((item) => {
        return(
          <li key={item.id}>
            <h5>{item.name}</h5>
            <h4>{item.addres}</h4>
            <h3>{item.email}</h3>
          </li>
        )
      })}
    </div>
  );
}

export default ApiWithReact;
