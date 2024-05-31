import React from "react";
import { useState } from "react";


function Acceso() {
    const [nombre, setNombre] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [enviado, setEnviado] = useState(false); // 

    const handleChangeName = (event) => {
        setNombre(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };


    return (

        <div>
            <h1>Acceso para empleados</h1>
            <form>
                <div>
                    <label> Usuario:
                        < br/> <input type="text" value={nombre} onChange={handleChangeName} />
                    </label>
                </div>
                <div>
                    <label>Contraseña:
                    < br/><input type="password" value={password} onChange={handleChangePassword} />
                    </label>
                </div>
                <button type="submit" disabled={enviado} >Acceder</button>
            </form>
        </div>
    );
}

export default Acceso;

