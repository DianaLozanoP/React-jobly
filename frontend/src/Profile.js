import TokenProvider from "./TokenProvider";
import { useContext } from "react"

const Profile = ({ currentUser }) => {
    const { token } = useContext(TokenProvider)
    return (
        <div className="profile">
            <h2>{token}</h2>
        </div>
    )
}

export default Profile;