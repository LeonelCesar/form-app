// É só valido para o axios 
"use client"
import axios, { AxiosRequestConfig } from "axios";
import { error } from "console";
import { useEffect, useState } from "react";

function useFetch<T = unknown>(url: string) {   // Aqui podemos passar outros parametros
  const [data, setData] = useState<T | null>(null);
  const [ isFetching, setIsFetching ] = useState(true);
  const [ error, setError ] = useState<Error | null>(null);

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setData(response.data);
    })
    .catch(err => {
       setError(err);
    })
    .finally(() => {
        setIsFetching(false);
      })
  }, [url]);  // Adicionado `url` como dependência para evitar problemas de stale closure.

  return { data, isFetching, }
}

export default useFetch;
