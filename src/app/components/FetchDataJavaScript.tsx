import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  userName: string;
  address: string;
  zipcode: string;
};

function FetchDataTypeScript() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div>
      <h2>Fetch Data JavaScript Nativo</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
    </div>
  );
}

export default FetchDataTypeScript;

