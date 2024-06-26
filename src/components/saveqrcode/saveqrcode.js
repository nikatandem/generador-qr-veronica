import React, { useState } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ffffff;
  color: #b41400;
  border: double #b41400;
  &:hover {
    background-color: #b41400;
    border: double #ffffff;
    color: #ffffff;
  }

  @media (min-width: 320px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const SaveQrCode = ({ data, nombre_ref, description, created_by }) => {
  const [responseMessage, setResponseMessage] = useState('');

  const saveQrCode = async () => {
    const requestBody = {
      data: data,
      nombre_ref: nombre_ref,
      description: description,
      created_by: created_by,
    };

    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/create-qr.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message || '¡QR guardado con éxito!');
        console.log('Success:', data);
      } else {
        setResponseMessage(data.message || 'Algo ha fallado al guardar el QR.');
        console.error('Error:', data);
      }
    } catch (error) {
      setResponseMessage('Ha habido un fallo de conexión.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Button onClick={saveQrCode}>Guardar QR en la Base de Datos</Button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default SaveQrCode;

