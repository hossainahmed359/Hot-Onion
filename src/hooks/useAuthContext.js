import { useContext } from "react"
import { UseAuthContext } from "../components/Context/ProvideContext"


const useAuth = () => {
    return useContext(UseAuthContext);
}

export default useAuth;