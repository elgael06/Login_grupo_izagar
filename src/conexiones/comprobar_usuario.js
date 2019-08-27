import Axios from "axios";
import ip from "./host";

const comprobar_usuario = async (Nombre, password) => {
    try{
    const respuesta = await Axios.post(`${ip}login/Sesion?nombre=${Nombre}&password=${password}` );
    console.log(respuesta)
    return respuesta.data;
    }catch{
        console.log("Error...");
        return true;
    }
}

export default comprobar_usuario;