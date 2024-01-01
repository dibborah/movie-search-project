import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

import { apikey } from "./constants";

// pages import
import Home from "./pages/Home";
import Root from "./pages/Root";
import Error from "./pages/Error";
import SingleMovieDetail from "./pages/SingleMovieDetail";

// loaders import
import { loader as MovieLoader } from "./pages/Home";

const router =  createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Root/>}>
  <Route index element={<Home/>} loader={MovieLoader}/>
  <Route path="/detail/:imdbId" element={<SingleMovieDetail/>}/>
  <Route path="*" element={<Error/>}/>
</Route>))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;