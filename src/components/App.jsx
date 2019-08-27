import React,{useState,useEffect} from 'react';
//estylos
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import '../styles/custom.css';
import '../styles/Site.css';
//imagen
import { logo_izagar } from '../Globales/Base64/logo_izagar';
//componentes
import InputForm from './InputForm';
import Cargando from './Cargando'
//conexiones
import comprobar_usuario from '../conexiones/comprobar_usuario';
import ip from '../conexiones/host';
import Accesos from './Accesos';

const App =()=>{
    //state
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [modal,setModal] = useState(false);
    const [cargando,setCargando]= useState(false);
    useEffect(() => {
    })
    //funciones
    const consultar = async e => {
        e.preventDefault();
        if( usuario && pass){
            setCargando(true)
            console.log("sesion...")
            let respuesta = await comprobar_usuario(usuario ,pass);
            if(respuesta){
            console.log("Respuesta",respuesta)
            setTimeout(()=> window.location.href  =ip,1000)
            }else {
                try{                    
                    errorPassword();
                }catch{
                 }
                 setPass("");
            }
        }
        else{
            document.querySelector( usuario==="" ? "#nombre" : "#password").focus();
            alert("Llene los campos !!!");
            setCargando(false);
        }
    }
    const mostrar_modal = () => {
        setModal(true)
    }

    const errorPassword =()=>{
        setCargando(false);
        document.querySelector("#password").style.border ="red 2px solid";
        setTimeout(()=> {
            document.querySelector("#password").style.border ="1px solid #c8c8c8"
            document.querySelector("#password").focus();
        },1000);
    }
    return (<div>
        {cargando ? <Cargando /> :
        <div className="login_wrapper container" style={{ marginTop: 50 }}>
            <div className="form login_form">
                <section 
                    style={{ textAlign: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }} 
                    className="login_content" >
                    <i className="btn btn-light  menu"
                        onClick={mostrar_modal}>
                        <i className="fa fa-bars"></i>
                    </i>
                    <form style={{ marginTop: "-30px" }} onSubmit={consultar} className="container">
                        <h1 style={{ padding: "10px", marginTop: "-10px" }}>INICIO</h1>
                        <InputForm
                            className="fa fa-user"
                            type="text"
                            value={usuario}
                            id={"nombre"}
                            onChange={setUsuario}
                            placeholder="USUARIO." 
                        />
                        <InputForm
                            className="fa fa-lock" 
                            value={pass}
                            onChange={setPass}
                            type={"password"}
                            id={"password"}
                            placeholder="CONTRASEÑA."
                        />
                        <br />
                        <button 
                            style={{ width: 180, marginLeft: 10,background:"#6384a2" }} 
                            id="formulario"
                            className="glyphicon glyphicon-log-in btn btn-secondary" 
                            type="submit">
                                 ENTRAR
                                <i className="fa fa-angle-double-right p-1"></i>
                        </button>
                    </form>
                    <div style={{ height: 115, marginTop: -10 }} className="p-3">
                        <img src={logo_izagar} height="90" />
                    </div>
                </section>
            </div>
        </div>}
           {!modal || <Accesos onCerrar={()=>setModal(false)} />}
    </div>);
}

export default App;