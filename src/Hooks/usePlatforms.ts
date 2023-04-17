import useData from "./useData";

export interface Platform {
  // grab only what you need
  id: number;
  name: string;
  slug: string;
}

//takes in a typeparameter, sort of inheriting a class, passing an argument of /genres as it's endpoint in useData
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
