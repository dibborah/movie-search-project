import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({data}) => {
  const { movieApiResponse, error, isError } = data;
  // console.log(movieApiResponse);
  if (isError) {
    return <h1>{error}</h1>    
  }
  if (movieApiResponse && movieApiResponse.Response==="False") {
    return <h1>{movieApiResponse.Error || "No results found"}</h1>;    
  }
  return (
    <div className={`container ${styles.moviesList}`}>
        {movieApiResponse.Search.map((movie) => {
            return <MovieCard key={movie.imdbID} {...movie} />;
        })}
    </div>
);
}

export default MovieList;