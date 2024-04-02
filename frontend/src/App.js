import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from "react"
import Home from './Home';
import Companies from './Companies';
import CompanyJobs from './CompanyJobs';
import Jobs from './Jobs';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Profile from './Profile';
import useLocalStorage from './Hooks/useLocalStorage';
import JoblyApi from './api';

function App() {

  const [currentUser, setCurrentUser] = useState({ username: "", firstName: "", lastName: "", email: "", jobs: [] })
  const [token, setToken] = useLocalStorage('token', '');

  const navigate = useNavigate();

  const addUser = async ({ user, token }) => {
    if (token) {
      setToken(token);
    }
    if (user.firstName) {
      setCurrentUser({ username: user.username, firstName: user.firstName, lastName: user.lastName, email: user.email })
    } else {
      let response = await JoblyApi.getUser(user.username)
      console.log("add user", response)
      const { username, firstName, lastName, email, applications } = response.user;
      setCurrentUser({ username, firstName, lastName, email, applications });
    }

  }
  const logout = () => {
    setToken('')
    setCurrentUser({ username: "", firstName: "", lastName: "" })
    navigate("/")
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/companies" element={<Companies token={token} />} />
        <Route path="/companies/:handle" element={<CompanyJobs currentUser={currentUser} token={token} />} />
        <Route path="/jobs" element={<Jobs currentUser={currentUser} token={token} />} />
        <Route path="/login" element={<LogIn addUser={addUser} />} />
        <Route path="/signup" element={<SignUp addUser={addUser} />} />
        <Route path="/profile" element={<Profile currentUser={currentUser} addUser={addUser} token={token} />} />
      </Routes>

    </div>

  );
}

export default App;
