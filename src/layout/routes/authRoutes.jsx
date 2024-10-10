import { useNavigate } from "react-router-dom"
import LoginPage from "../../pages/auth/login"

export const authRoutes = [
    {
        path:"/",
        // element:<button onClick={()=>sessionStorage.setItem('UR',1)}>Login</button>
        element:<LoginPage/>
    }
]