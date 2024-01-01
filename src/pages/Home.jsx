import axios from "axios";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
    // throw new Error("Something went extremely wrong here!!!");

    // console.log(request.url);
    const url = new URL(request.url);// This new URL is a function or method provided by vanilla JavaScript
    // console.log(url);
    const searchTerm = url.searchParams.get("search") || "demon slayer";// This line will return if no search parameter is passed
    try {
      const movieSearchEndpoint = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
      const response = await axios.get(movieSearchEndpoint);
      // console.log(response.data);
      return { movieApiResponse : response.data, searchTerm : searchTerm, isError : false, error:"" };
    } catch (error) {
      const errorMessage = error?.response?.data?.Error || error?.message || "Something went wrong";
      return { movieApiResponse : null, searchTerm : searchTerm, isError : true, error: errorMessage };
    }
}

const Home = () => {
  const data = useLoaderData();
  // console.log(data); 
  return (
    <div>
        <SearchForm searchTerm={data.searchTerm}/>
        <MovieList data={data}/>
    </div>
  )
}

export default Home;