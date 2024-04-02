
// import { useContext } from "react"
import UpdateUser from "./UpdateUser";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = ({ currentUser, addUser, token }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            // Navigate to home page if authToken is not available
            navigate('/');
        }
    }, [token, navigate]);

    const updateInfo = async (data) => {
        let response = await JoblyApi.patchUser(data)
        addUser(response)
        navigate("/")
    }
    // const { token } = useContext(TokenProvider)
    return (
        <div className="profile">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3" style={{
                    fontWeight: "bold", color: "white"
                }}>Profile</h3>
                <div className="card">
                    <div className="card-body">
                        <UpdateUser currentUser={currentUser} updateInfo={updateInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;