import FormSignUp from "./FormSignUp";
import JoblyApi from './api';
import { useNavigate } from "react-router-dom"

const SignUp = ({ addUser }) => {
    const navigate = useNavigate();
    const signup = async (data) => {
        try {
            const response = await JoblyApi.registerUser(data);
            console.log("User registered successfully:", response);
            let user = data;
            let token = response.data
            addUser({ user, token })
            navigate("/")

        } catch (err) {
            console.error("Error registering user:", err);
        }

    }
    return (
        <div className="signup">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3" style={{
                    fontWeight: "bold", color: "white"
                }}>Sign Up</h3>
                <div className="card">
                    <div className="card-body">
                        <FormSignUp signup={signup} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;