import React from "react";
import { useState } from 'react';
import './App.css'

function AgregarUsuario(){

 
      const [modalOpen, setModalOpen] = useState(false);
      const [formData, setFormData] = useState({
        nombre: '',
        delegacion: '',
        email: '',
        password: ''
      });
      const [message, setMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        setMessage(data.message);
        if (response.ok) {
          setModalOpen(false);
        }
      };
    
      return (
        <div className="App">
          <button onClick={() => setModalOpen(true)} className="btn">Nuevo Usuario</button>
          {modalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                <h2>Registrar Nuevo Usuario</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Nombre:
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                  </label>
                     <label htmlFor="delegacion" >Delegación:</label>
              <select
               className="selectoptions"
                id="delegacion"
                name="delegacion"
                value={formData.delegacion}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una delegación</option>
                <option value="La Almudaina">La Almudaina</option>
                <option value="Aranjuez">Aranjuez</option>
                <option value="El Pardo">El Pardo</option>
                <option value="San Ildefonso">San Ildefonso</option>
                <option value="San Jerónimo de Yuste">San Jerónimo de Yuste</option>
                <option value="San Lorenzo de El Escorial">San Lorenzo de El Escorial</option>
                <option value="Reales Patronatos">Reales Patronatos</option>
              </select>
                  <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </label>
                  <label>
                    Contraseña:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                  </label>
                  <button type="submit" className="btn">Agregar </button>
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          )}
        </div>
      );
    }

    

export default AgregarUsuario;