import useData from "./useData";

// This hook is to access all genres from the API

export interface Genre {
  // grab only what you need
  id: number;
  name: string;
  image_background: string;
}

//takes in a typeparameter, sort of inheriting a class, passing an argument of /genres as it's endpoint in useData
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
