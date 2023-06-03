import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGeners = () => useData<Genre>("/genres");
export default useGeners;
