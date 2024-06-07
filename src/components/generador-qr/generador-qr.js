import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import DownloadQRCode from "./descargar";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
`;

const Button = styled.button`
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #FFFFFF;
  color: #B41400;
  border: double #B41400;
  &:hover {
    background-color: #B41400;
    border: double #ffffff;
    color: #ffffff;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  background-color: #FFFFFF;
  border: double #B41400;
  color: #B41400;
  font-family: Century Gothic, serif;
  background: ${(props) => (props.isActive ? '#eee' : 'white')};
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid black' : 'none')};
  &:focus {
    outline: none;
  }
`;

const TabPanel = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  padding: 20px;
`;

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [qrSize, setQrSize] = useState(250);
  const [qrBgColor, setQrBgColor] = useState('#ffffff');
  const [qrFgColor, setQrFgColor] = useState('#000000');
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    setQrValue(inputValue);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setInputValue('');
    setQrValue('');
  };

  return (
    <Container>
     
      <TabContainer>
        <TabList>
          <Tab isActive={activeTab === 0} onClick={() => handleTabClick(0)}>Texto</Tab>
          <Tab isActive={activeTab === 1} onClick={() => handleTabClick(1)}>URL</Tab>
          <Tab isActive={activeTab === 2} onClick={() => handleTabClick(2)}>Teléfono</Tab>
          <Tab isActive={activeTab === 3} onClick={() => handleTabClick(3)}>Correo</Tab>
          <Tab isActive={activeTab === 4} onClick={() => handleTabClick(4)}>Localización</Tab>
        </TabList>
        <TabPanel isActive={activeTab === 0}>
          <p>Introduce la información</p>
          <Input
            type="text"
            placeholder="Inserte un texto"
            value={inputValue}
            onChange={handleChange}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 1}>
          <p>Introduce la URL</p>
          <Input
            type="text"
            placeholder="https://www.ejemplo.com"
            value={inputValue}
            onChange={handleChange}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 2}>
          <p>Introduce el número de teléfono</p>
          <Input
            type="text"
            placeholder="912 345 678"
            value={inputValue}
            onChange={handleChange}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 3}>
          <p>Introduce la dirección de e-mail</p>
          <Input
            type="text"
            placeholder="ejemplo@hotmail.com"
            value={inputValue}
            onChange={handleChange}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 4}>
          <p>Introduce las coordenadas</p>
          <Input
            type="text"
            placeholder="Latitud (41 24.2028), Longitud (2 10.4418)"
            value={inputValue}
            onChange={handleChange}
          />
        
        </TabPanel>
      </TabContainer>
      <p>Selecciona el tamaño (px):</p>
      <p className='subtexto'>*Tamaños recomendados: pequeño 100px, mediano 150px, grande 250px</p>
      <Input
        type="number"
        placeholder="Tamaño (px)"
        value={qrSize}
        onChange={(e) => setQrSize(e.target.value)}
      />
      <p>Selecciona el color de fondo en tono claro:</p>
      <Input
        type="color"
        value={qrBgColor}
        onChange={(e) => setQrBgColor(e.target.value)}
      />
      <p>Selecciona el color del código  en tono oscuro:</p>
      <Input
        type="color"
        value={qrFgColor}
        onChange={(e) => setQrFgColor(e.target.value)}
      />
      <Button onClick={handleGenerate}>Generar Código QR</Button>
      {qrValue && (
        <div>
          <div id="qrCode">
            <QRCode value={qrValue} size={qrSize} bgColor={qrBgColor} fgColor={qrFgColor} />
          </div>
          <DownloadQRCode qrValue={qrValue} qrSize={qrSize} qrBgColor={qrBgColor} qrFgColor={qrFgColor} />
        </div>
      )}
    </Container>
  );
};

export default QrCodeGenerator;
