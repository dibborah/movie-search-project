import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/">Movie Search</Link>
        <Outlet/>
      </nav>
    </div>
  )
}

export default Root;