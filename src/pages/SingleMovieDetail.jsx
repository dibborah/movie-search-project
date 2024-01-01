import axios from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export const loader = async ({params}) => {
  const imdbId = params.imdbId;
  const URL = `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${apiKey}`;
  try {
    const response = await axios.get(URL);
    console.log(response);
    return {
      movie : response.data,
      isError: false,
      error : "",
    };
  } catch (error) {
    console.log(error);
    const errorMessage = error?.response?.data?.Error || error?.message || "Something went wrong";
    return { 
      movie : null,
      isError : true, 
      error : errorMessage,
    }
  }
}

const SingleMovieDetail = () => {
  const data = useLoaderData();
  const { isError, error, movie : movieDetail } = data;
  if (isError) {
    return <h1>{error}</h1>    
  }
  if(movieDetail && movieDetail.Response ==="False"){
    return <h1>{movie.Error}</h1>
  }
  return (
    <div>
      <p>{movieDetail.Title}</p>
    </div>
  )
}

export default SingleMovieDetail;
