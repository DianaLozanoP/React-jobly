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
import TokenProvider, { useToken } from './TokenProvider';

function App() {

  const [currentUser, setCurrentUser] = useState({ username: "", firstName: "", lastName: "" })
  const [token, setToken] = useLocalStorage('token', '');

  const navigate = useNavigate();

  const { updateToken } = useToken()

  useEffect(() => {
    updateToken(token)
  }, [token, updateToken])

  const addUser = async ({ user, token }) => {
    setToken(token);
    if (user.firstName) {
      setCurrentUser({ username: user.username, firstName: user.firstName, lastName: user.lastName })
    } else {
      let response = await JoblyApi.getUser(user.username)
      setCurrentUser({ username: response.user.username, firstName: response.firstName, lastName: response.lastName })
    }

  }
  const logout = () => {
    setToken('')
    setCurrentUser({ username: "", firstName: "", lastName: "" })
    navigate("/")
  }

  return (
    <TokenProvider>
      <div className="App">
        <NavBar currentUser={currentUser} logout={logout} />
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:handle" element={<CompanyJobs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<LogIn addUser={addUser} />} />
          <Route path="/signup" element={<SignUp addUser={addUser} />} />
          <Route path="/profile" element={<Profile currentUser={currentUser} />} />
        </Routes>

      </div>
    </TokenProvider>

  );
}

export default App;
