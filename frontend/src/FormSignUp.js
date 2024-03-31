import { useState } from "react"


const FormSignUp = ({ signup }) => {

    //empty string for the search
    const INITIAL_STATE = { username: "", password: "", firstName: "", lastName: "", email: "" }
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
        signup({ ...formData })
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
            <div className="mb-3" >
                <label className="form-label">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3" >
                <label className="form-label">Last name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3" >
                <label className="form-label">Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary">Submit</button>

        </form>
    )
}

export default FormSignUp;