import "./App.css"
import { Link } from "react-router-dom"

const Home = ({ currentUser }) => {
    return (
        <div className="homepage">
            <div className="home-center">
                <h2 className="mb-4 fw-bold">Jobly</h2>
                <p>All the jobs in one, convenient place.</p>
                {currentUser.username.length === 0 ?
                    <>
                        <Link to="/login" className='button btn btn-primary'>Log in</Link>
                        <Link to="/signup" className='button btn btn-primary'>Sign Up</Link>
                    </> :
                    <h3>Welcome back {currentUser.firstName}</h3>}

            </div>
        </div>
    )
}

export default Home;