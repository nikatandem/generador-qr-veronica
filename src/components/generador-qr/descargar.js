import React, { useState, useRef } from 'react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import styled from 'styled-components';

const Button = styled.button`
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

const DownloadQRCode = ({ qrRef }) => {
  const [showFormatInput, setShowFormatInput] = useState(false);
  const [format, setFormat] = useState('png');

  const handleDownload = () => {
    setShowFormatInput(true);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleConfirmDownload = () => {
    if (qrRef && qrRef.current) {
      const node = qrRef.current;
      console.log('Node to convert:', node);

      switch (format) {
        case 'png':
          toPng(node)
            .then((dataUrl) => {
              const link = document.createElement('a');
              link.href = dataUrl;
              link.download = 'qrcode.png';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((error) => {
              console.error('Error generating PNG:', error);
            });
          break;
        case 'jpeg':
          toJpeg(node)
            .then((dataUrl) => {
              const link = document.createElement('a');
              link.href = dataUrl;
              link.download = 'qrcode.jpeg';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((error) => {
              console.error('Error generating JPEG:', error);
            });
          break;
        case 'svg':
          toSvg(node)
            .then((dataUrl) => {
              const link = document.createElement('a');
              link.href = dataUrl;
              link.download = 'qrcode.svg';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((error) => {
              console.error('Error generating SVG:', error);
            });
          break;
        default:
          console.error('Unsupported format:', format);
          break;
      }
    } else {
      console.error('qrRef or qrRef.current is null');
    }
    setShowFormatInput(false);
  };

  return (
    <div>
      <Button onClick={handleDownload}>Descargar Código QR</Button>
      {showFormatInput && (
        <div>
          <label htmlFor="format">Selecciona el formato:</label>
          <select id="format" value={format} onChange={handleFormatChange}>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="svg">SVG</option>
          </select>
          <Button onClick={handleConfirmDownload}>Confirmar Descarga</Button>
        </div>
      )}
    </div>
  );
};

export default DownloadQRCode;
