import FormLogIn from "./FormLogIn";
import { useNavigate } from "react-router-dom"
import JoblyApi from "./api";

const LogIn = ({ addUser }) => {
    const navigate = useNavigate();
    const login = async (data) => {
        try {
            const response = await JoblyApi.logInUser(data);
            console.log("User logged in succesfully:", response);
            let user = data;
            let token = response.data.token
            addUser({ user, token })
            navigate("/")

        } catch (err) {
            console.error("Error registering user:", err);
        }
    }
    return (
        <div className="login">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3" style={{
                    fontWeight: "bold", color: "white"
                }}>Log In</h3>
                <div className="card">
                    <div className="card-body">
                        <FormLogIn login={login} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;