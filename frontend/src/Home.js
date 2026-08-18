import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import JoblyApi from "./api";

const Home = ({ currentUser, addUser }) => {
    const navigate = useNavigate();

    const handleGuestLogin = async () => {
        try {
            const guestData = { username: "testuser", password: "password" };
            const response = await JoblyApi.logInUser(guestData);

            let user = guestData;
            let token = response.data.token;

            await addUser({ user, token });
            navigate("/companies");
        } catch (err) {
            console.error("Guest login failed:", err);
        }
    };

    return (
        <div className="homepage">
            <div className="home-center">
                <h2 className="mb-4 fw-bold">Jobly</h2>
                <p>All the jobs in one, convenient place.</p>
                {currentUser.username.length === 0 ? (
                    <div className="d-flex justify-content-center gap-2 mt-3">
                        <button
                            onClick={handleGuestLogin}
                            className="button btn btn-primary"
                        >
                            Explore as Guest
                        </button>
                        <Link to="/login" className="button btn btn-outline-primary">Log in</Link>
                        <Link to="/signup" className="button btn btn-outline-primary">Sign Up</Link>
                    </div>
                ) : (
                    <h3>Welcome back {currentUser.firstName}!</h3>
                )}
            </div>
        </div>
    );
};

export default Home;