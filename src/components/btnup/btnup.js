import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importa el icono de la flecha hacia arriba
import "./btnup.css"

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Agregar un event listener para detectar cuando el usuario se desplaza hacia abajo
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Maneja el desplazamiento de la página
  const handleScroll = () => {
    // Muestra el botón cuando el usuario ha desplazado 400px hacia abajo
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para llevar al usuario al inicio de la página cuando se hace clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <button id='top' className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
  ↑
    </button>
  );
};

export default TopButton;