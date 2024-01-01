import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

export const loader = (args) => {
    console.log(args);
    return null;
}

const Home = () => {
  return (
    <div>
        <SearchForm/>
        <MovieList/>
    </div>
  )
}

export default Home;