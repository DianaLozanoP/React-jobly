import { useState } from "react"

const SearchForm = ({ searchTerm }) => {
    //empty string for the search
    const INITIAL_STATE = { search: "" }
    //state for search
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchTerm({ ...formData })
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="search"
                type="text"
                name="search"
                placeholder="Search by name"
                value={formData.search}
                onChange={handleChange}
                size={60}
            />
            <button>Search</button>
        </form>
    )
}

export default SearchForm;