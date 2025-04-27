"use client"
import useFetch from "../useFetch";

type Repository = {
  id: number;
  fullName: string;
  email: string;
  address?: [];
  description?: string;
};

function ApiWithAxiosRestfullSemReactQuery() {
 const { data: repositoriesApi, isFetching } = useFetch<Repository[]>('https://jsonplaceholder.typicode.com/users')

  return (
    <div className="">
        {isFetching  && <p>Carregando...</p>}
      <h2> Api With Axios Restfull Sem React Query</h2>
      {repositoriesApi?.map((repoApi) => {
        return (
          <div key={repoApi.id}>
            <h2>{repoApi.fullName}</h2>
            <h3>{repoApi.description}</h3>
            <p>{repoApi.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApiWithAxiosRestfullSemReactQuery;
