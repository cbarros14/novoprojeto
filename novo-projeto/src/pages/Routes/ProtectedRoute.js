import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  
      const { userLogged } =  useContext(AuthContext);
      console.log(userLogged);


// se o use nao tiver logado, envia ele para pagina de login
      if(!userLogged) {
        return <Navigate to='/login'/>

      } else {
        return children
      }

}

export default ProtectedRoute;