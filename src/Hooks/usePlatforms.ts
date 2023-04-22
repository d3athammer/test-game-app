import platforms from "../data/Platform";

export interface Platform {
  // grab only what you need
  id: number;
  name: string;
  slug: string;
}

//takes in a typeparameter, sort of inheriting a class, passing an argument of /genres as it's endpoint in useData
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// shipping static data
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
