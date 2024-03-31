import { useState } from "react"

const FormLogIn = ({ login }) => {
    //empty string for the search
    const INITIAL_STATE = { username: "", password: "" }
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
        login({ ...formData })
        setFormData(INITIAL_STATE)
    }
    return (

        <form onSubmit={handleSubmit}>
            <div >
                <label className="form-label">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3" >
                <label className="form-label">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary">Submit</button>

        </form>
    )
}

export default FormLogIn;