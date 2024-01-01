import { Link } from "react-router-dom";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <Link to={`/detail/${imdbID}`}><p>{Title}</p></Link>
  )
}

export default MovieCard;