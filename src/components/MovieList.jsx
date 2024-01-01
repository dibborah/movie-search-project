import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({data}) => {
  const { movieApiResponse, error, isError } = data;
  // console.log(movieApiResponse);
  if (isError) {
    return <h1>{error}</h1>    
  }
  if (movieApiResponse && movieApiResponse.Response==="False") {
    return <h1>{movieApiResponse.Error || "No results found"}</h1>;    
  }
  return <div>
    {movieApiResponse && movieApiResponse.Search.map(movie => <MovieCard key={movie.imdbID} {...movie}/>)} 
  </div>
}

export default MovieList;