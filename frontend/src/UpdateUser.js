import { useState } from "react"

const UpdateUser = ({ currentUser, updateInfo }) => {
    const INITIAL_STATE = {
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    }
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
        updateInfo({ ...formData })
        setFormData(INITIAL_STATE)
    }
    return (

        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    className="form-control"
                    readOnly
                />
            </div>
            <div className="mb-3" >
                <label htmlFor="firstName" className="form-label">First Name</label>
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
            <button className="btn btn-primary btn-large">Save changes</button>

        </form>
    )
}

export default UpdateUser;