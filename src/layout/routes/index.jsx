import { authRoutes } from "./authRoutes";
import { publicRoutes } from "./publicRoutes";


const ROLES_ROUTES = {
    0:authRoutes,
    1:publicRoutes
}
export const getRoutes = (role)=>{
    // let userRole = sessionStorage.getItem('UR') || 0;
    // console.log("userRole",userRole);
  
    return  ROLES_ROUTES[role]
}