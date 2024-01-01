import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";

const SearchForm = ({searchTerm}) => {
  return (
    // Form main aap jab v koe v method nhi likhoge to wo ByDefault GET hogi
    <Form method="GET" className={`container ${styles.form}`}> {/* capital main likhna zarori nhi hain par convention hain */}
        <input type="text" name="search" id="search" defaultValue={searchTerm} required/>{/* To use the search parameter name attribute must be used */}
        <button type="submit">Search</button>
    </Form>
  )
}

export default SearchForm;