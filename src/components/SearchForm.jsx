import { Form } from "react-router-dom";

const SearchForm = () => {
  return (
    <Form method="GET">
        <input type="text" name="search" id="search" required/>{/* To use the search parameter name attribute must be used */}
        <button type="submit">Search</button>
    </Form>
  )
}

export default SearchForm;