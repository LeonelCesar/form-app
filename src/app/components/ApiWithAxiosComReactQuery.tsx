/* import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Repository = {
  id: number;
  name: string;
  email: string;
  address?: { street: string; city: string };
};

// TEM ERRO POR CAUSA DO LAYOUT E TEM QUE PASSAR O QUERY CLIENT PROVAIDER...

function ApiWithAxiosComReactQuery() {
  const { data, isFetching } = useQuery<Repository[]>(["users"], async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  });

  return (
    <div>
      <h2>Api With Axios Com React Query</h2>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repo) => {
        return (
          <div key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.email}</p>
            {repo.address && (
              <h3>
                {repo.address.street}, {repo.address.city}
              </h3>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ApiWithAxiosComReactQuery;  */
