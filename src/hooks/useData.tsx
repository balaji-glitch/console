import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  endpoint: string,
  requestconfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setdata] = useState<T[]>([]);
  const [error, seterror] = useState("");
  const [isloading, setloading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setloading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestconfig,
        })
        .then((res) => {
          setdata(res.data.results);
          setloading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) seterror("");
        });
      60;
      return () => controller.abort();
    },

    deps ? [...deps] : []
  );

  return { data, error, isloading };
};
export default useData;
