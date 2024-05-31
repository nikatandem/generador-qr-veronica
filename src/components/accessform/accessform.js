import React from "react";
import "./formstyle.css";
import { useState } from "react";

function Acceso() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [enviado, setEnviado] = useState(false); //

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
 <div class="container">   
  
    
    <div className="acceso">
     
     <div>
        <form>
            <h1 className="titulo">Acceso para empleados</h1>
                <div>
                    <label className="contraseña"> Usuario:
                        < br/> <input className="campo"  type="text" value={nombre} onChange={handleChangeName} />
                    </label>
                </div>
                <div>
                    <label className="contraseña">Contraseña:
                    <br/><input className="campo" type="password" value={password} onChange={handleChangePassword} />
                    </label>
                    
                </div>
                <button className="elemento-button" type="submit" disabled={enviado} >Acceder</button>
                <p className="p-recuperar">¿Has olvidado tu contraseña?</p>
                    <button className="btn-recuperar">Recuperar clave de acceso</button>
            </form>
          
        </div>


      </div>
      </div>
  );
}
export default Acceso;
