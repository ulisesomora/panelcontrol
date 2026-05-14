import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";


//Creamos un Hook para tener más control del context
export function useAuth(){
    return useContext(AuthContext)
}