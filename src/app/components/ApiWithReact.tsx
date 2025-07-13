"use client";

import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
};

function ApiWithReact() {
  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h4 className="text-xl font-bold mb-4">API React Normal os dados veem de db.json</h4>
      <ul className="space-y-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 shadow rounded border border-gray-200"
          >
            <h5 className="text-lg font-semibold">{item.name}</h5>
            <p className="text-gray-600">📧 {item.email}</p>
            <p className="text-gray-500">🏠 {item.address.street}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiWithReact;
