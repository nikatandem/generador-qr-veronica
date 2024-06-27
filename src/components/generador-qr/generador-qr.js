import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import download from 'downloadjs';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import './tabs.css';
import 'react-toastify/dist/ReactToastify.css';
import MapaConMarcador from './mapa';
import SaveQrCode from '../saveqrcode/saveqrcode';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0;

  @media (min-width: 320px) {
    padding: 5px;
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 80%;

  @media (min-width: 320px) {
    width: 100%;
    font-size: 14px;
    padding: auto;
  }
`;

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

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;

  @media (min-width: 320px) {
    width: 100%;
    margin: 3px;
  }
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;

  @media (min-width: 320px) {
    flex-direction: column;
    border-bottom: none;
    margin: 3px;
  }
`;

const Tab = styled.button`
  flex: 1;
  padding: 15px;
  height: 50px;
  cursor: pointer;
  background-color: #ffffff;
  border: double #b41400;
  color: #b41400;
  font-family: Century Gothic, serif;
  background: ${(props) => (props.isActive ? '#eee' : 'white')};
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid black' : 'none')};
  &:focus {
    outline: none;
  }

  @media (min-width: 320px) {
    font-size: 16px;
    margin: 3px 2px 0px 2px;
  }
`;

const TabPanel = styled.div`
  margin-left: 5%;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  padding: 0px;
  width: auto;
  height: auto;
  margin-top: 0px;

  @media (min-width: 320px) {
    padding: 1.5px;
    width: 100%;
  }
`;

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [qrSize, setQrSize] = useState(250);
  const [qrBgColor, setQrBgColor] = useState('#ffffff');
  const [qrFgColor, setQrFgColor] = useState('#000000');
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('png');
  const [downloadMessage, setDownloadMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  const [nombre_ref, setNombre_ref] = useState('qr-code');
  const qrRef = useRef(null); // Cambiado a una variable de referencia normal
  const [description, setDescription] = useState('');
  const [latLng, setLatLng] = useState({ lat: '', lng: '' });

  // Define userId aquí
  const userId = 1; // Ajusta esto según la lógica de tu aplicación

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    if (activeTab === 4) {
      if (!latLng.lat || !latLng.lng) {
        setWarningMessage('Por favor, introduce las coordenadas.');
        return;
      }
      setQrValue(`Latitud: ${latLng.lat}, Longitud: ${latLng.lng}`);
    } else {
      if (inputValue.trim() === '') {
        setWarningMessage('Por favor, rellena este campo');
        return;
      }
      setQrValue(inputValue);
    }
    setWarningMessage('');
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setInputValue('');
    setQrValue('');
    setLatLng({ lat: '', lng: '' });
    setWarningMessage('');
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleConfirmDownload = async () => {
    if (qrRef.current) {
      const node = qrRef.current;
      let dataUrl;
      if (selectedFormat === 'png') {
        dataUrl = await toPng(node);
      } else if (selectedFormat === 'jpeg') {
        dataUrl = await toJpeg(node);
      } else if (selectedFormat === 'svg') {
        dataUrl = await toSvg(node);
      }
      download(dataUrl, `${nombre_ref}.${selectedFormat}`);
      setDownloadMessage('Su QR se ha descargado con éxito');
    }
  };

  return (
    <Container>
      <TabContainer>
        <TabList>
          <Tab isActive={activeTab === 0} onClick={() => handleTabClick(0)}>
            Texto
          </Tab>
          <Tab isActive={activeTab === 1} onClick={() => handleTabClick(1)}>
            URL
          </Tab>
          <Tab isActive={activeTab === 2} onClick={() => handleTabClick(2)}>
            Teléfono
          </Tab>
          <Tab isActive={activeTab === 3} onClick={() => handleTabClick(3)}>
            Correo
          </Tab>
          <Tab isActive={activeTab === 4} onClick={() => handleTabClick(4)}>
            Localización
          </Tab>
        </TabList>
        <TabPanel isActive={activeTab === 0}>
          <p>Introduce la información</p>
          <Input
            className='dato'
            type='text'
            placeholder='Inserte un texto'
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage ? '#B41400' : '', margin: '0' }}
          />
                {warningMessage && <span style={{ color: '#B41400' }}>{warningMessage}</span>}
        </TabPanel>
        <TabPanel isActive={activeTab === 1}>
          <p>Introduce la URL</p>
          <Input
            className='dato'
            type='text'
            placeholder='https://www.ejemplo.com'
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage ? '#B41400' : '', margin: '0' }}
          />
          {warningMessage && <span style={{ color: '#B41400' }}>{warningMessage}</span>}
        </TabPanel>
        <TabPanel isActive={activeTab === 2}>
          <p>Introduce el número de teléfono</p>
          <Input
            className='dato'
            type='text'
            placeholder='912 345 678'
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage ? '#B41400' : '', margin: '0' }}
          />
          {warningMessage && <span style={{ color: '#B41400' }}>{warningMessage}</span>}
        </TabPanel>
        <TabPanel isActive={activeTab === 3}>
          <p>Introduce la dirección de e-mail</p>
          <Input
            className='dato'
            type='text'
            placeholder='ejemplo@hotmail.com'
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage ? '#B41400' : '', margin: '0' }}
          />
          {warningMessage && <span style={{ color: '#B41400' }}>{warningMessage}</span>}
        </TabPanel>
        <TabPanel isActive={activeTab === 4}>
          <p>Introduce las coordenadas</p>
          <Input
            className='dato'
            type='text'
            placeholder='Latitud'
            id='latitude'
            name='latitude'
            value={latLng.lat}
            onChange={(e) => setLatLng({ ...latLng, lat: e.target.value })}
            style={{ borderColor: warningMessage ? '#B41400' : '', margin: '0' }}
          />
          <Input
            className='dato'
            type='text'
            placeholder='Longitud'
            id='longitude'
            name='longitude'
            value={latLng.lng}
            onChange={(e) => setLatLng({ ...latLng, lng: e.target.value })}
            style={{ borderColor: warningMessage ? '#B41400' : '', margin: '0' }}
          />
          {warningMessage && <span style={{ color: '#B41400' }}>{warningMessage}</span>}
          <div>
            <MapaConMarcador setLatLng={setLatLng} />
            <div className='coordinates'>
              {latLng.lat && latLng.lng ? (
                <p>
                  Latitud: {latLng.lat}, Longitud: {latLng.lng}
                </p>
              ) : (
                <p>Haz clic en el mapa para obtener las coordenadas</p>
              )}
            </div>
          </div>
        </TabPanel>
      </TabContainer>
      <p>Selecciona el tamaño (px):</p>
      <p className='subtexto'>*Tamaños recomendados: pequeño 100px, mediano 150px, grande 250px</p>
      <Input
        className='selector'
        type='number'
        placeholder='Tamaño (px)'
        value={qrSize}
        onChange={(e) => setQrSize(e.target.value)}
      />
      <p>Selecciona el color de fondo en tono claro:</p>
      <Input
        className='selector'
        type='color'
        value={qrBgColor}
        onChange={(e) => setQrBgColor(e.target.value)}
      />
      <p>Selecciona el color del código en tono oscuro:</p>
      <Input
        className='selector'
        type='color'
        value={qrFgColor}
        onChange={(e) => setQrFgColor(e.target.value)}
      />
      <Button onClick={handleGenerate}>Generar Código QR</Button>
      {qrValue && (
        <div>
          <div id='qrCode' ref={qrRef}>
            <QRCode value={qrValue} size={qrSize} bgColor={qrBgColor} fgColor={qrFgColor} />
          </div>
          <div>
            <p className='contenido-revision'>El contenido introducido es el siguiente:</p>
            <div style={{ border: '1px solid #282828', padding: '10px', marginTop: '10px' }}>
              {activeTab === 4 ? (
                <p className='subtexto'>
                  Latitud: {latLng.lat}, Longitud: {latLng.lng}
                </p>
              ) : (
                <p className='subtexto'>{inputValue}</p>
              )}
            </div>
          </div>
          <div className='radio-group'>
            <hr />
            <h4>Introduce una breve descripción:</h4>
            <Input
              className='dato'
              type='text'
              placeholder='Código QR para [nombre de usuario]'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h4>Introduce el nombre del archivo:</h4>
            <Input
              className='selector'
              type='text'
              placeholder='Nombre de referencia del archivo'
              value={nombre_ref}
              onChange={(e) => setNombre_ref(e.target.value)}
            />
           
            
            <h4>Selecciona el formato para descargar el QR</h4>
            <label>
              <input
                type='radio'
                value='png'
                checked={selectedFormat === 'png'}
                onChange={handleFormatChange}
              />
              PNG
            </label>
            <label>
              <input
                type='radio'
                value='jpeg'
                checked={selectedFormat === 'jpeg'}
                onChange={handleFormatChange}
              />
              JPEG
            </label>
            <label>
              <input
                type='radio'
                value='svg'
                checked={selectedFormat === 'svg'}
                onChange={handleFormatChange}
              />
              SVG
            </label>
          </div>
          <Button onClick={handleConfirmDownload}>Descargar</Button>
          <SaveQrCode
            data={qrValue}
            nombre_ref={nombre_ref}
            description={description} // Puedes ajustar esto según tus necesidades
            created_by={userId}
          />
          {downloadMessage && <p>{downloadMessage}</p>}
        </div>
      )}
    </Container>
  );
};

export default QrCodeGenerator;
