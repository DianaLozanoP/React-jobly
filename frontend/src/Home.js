import "./App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JoblyApi from "./api";

const Home = ({ currentUser, addUser }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGuestLogin = async () => {
        setIsLoading(true);
        try {
            const guestData = { username: "testuser", password: "password" };
            const response = await JoblyApi.logInUser(guestData);

            let user = guestData;
            let token = response.data?.token || response.token;

            await addUser({ user, token });
            navigate("/companies");
        } catch (err) {
            console.error("Guest login failed:", err);
            setIsLoading(false);
        }
    };

    return (
        <div className="homepage">
            <div className="home-center">
                <h2 className="mb-4 fw-bold">Jobly</h2>
                <p>All the jobs in one, convenient place.</p>
                {currentUser.username.length === 0 ? (
                    <div>
                        <div className="d-flex justify-content-center gap-2 mt-3">
                            <button
                                onClick={handleGuestLogin}
                                className="button btn btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Logging in...
                                    </>
                                ) : (
                                    "Explore as Guest"
                                )}
                            </button>
                            <Link to="/login" className="button btn btn-outline-primary">Log in</Link>
                            <Link to="/signup" className="button btn btn-outline-primary">Sign Up</Link>
                        </div>

                        {/* Notice for cold-start server spin-up */}
                        {isLoading && (
                            <small className="text-muted d-block mt-2">
                                Free server instance warming up, this may take up to 30s...
                            </small>
                        )}
                    </div>
                ) : (
                    <h3>Welcome back {currentUser.firstName}!</h3>
                )}
            </div>
        </div>
    );
};

export default Home;