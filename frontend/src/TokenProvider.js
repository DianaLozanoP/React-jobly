import TokenContext from "./TokenContext"
import { useState, useContext } from "react"

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const updateToken = (newToken) => {
        setToken(newToken)
    }
    return (
        <TokenContext.Provider value={{ token, updateToken }} >
            {children}
        </TokenContext.Provider>
    )
}
export default TokenProvider;
export const useToken = () => useContext(TokenContext);