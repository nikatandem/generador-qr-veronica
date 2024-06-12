import React from "react"
import Layout from "../components/layout"
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
import "../components/general.css"
import { StaticImage } from "gatsby-plugin-image";

const Manual = () =>{
    return (
        <Layout>
            <HamburgerMenuPage/>

            <h1 className="titulo">Bienvenido al manual de uso de nuestra web de creación de códigos QR. </h1>
            <h2 className="titulo2">Esta guía te ayudará a entender todas las funcionalidades y características de la plataforma, para que puedas generar códigos QR de manera efectiva y personalizada.</h2>
            <ul>
                <li><a href="#introduccion" id="enlace">Introducción</a></li>
                <li><a href="#inicio-sesion" id="enlace">Registro e Inicio de Sesión</a></li>
                <li><a href="#panel-control" id="enlace">Panel de Control</a></li>
                <li><a href="#creacion-codigos"  id="enlace">Creación de Códigos QR: Generar Código QR Básico</a></li>
                <li><a href="#opciones-avanzadas" id="enlace">Opciones Avanzadas</a></li>
                <li><a href="#personalizacion" id="enlace">Personalización de Códigos QR: Modificar tamaño, Cambiar Color</a></li>
                <li><a href="#gestion-codigos" id="enlace">Gestión de Códigos QR: Guardar y Descargar</a></li>
            </ul>
            <hr/>
            <div className="contenido">
                <h3 id="introduccion" className="titulo3">INTRODUCCIÓN</h3>
                <p className="texto">Nuestra web de creación de códigos QR es una herramienta sencilla y poderosa para generar códigos QR personalizados. Puedes crear códigos para enlaces, textos, ubicaciones, eventos, y mucho más. Este manual te guiará paso a paso para aprovechar al máximo todas las funciones disponibles.</p>
                
                <h3 id="inicio-sesion" className="titulo3">INICIO DE SESIÓN</h3>
                <h4 className="titulo4">Inicio de Sesión:</h4>
                <p className="texto">Dirígete a la página de inicio de sesión desde la esquina superior derecha.
                Introduce tu correo electrónico y contraseña registrados.
                Haz clic en "Iniciar Sesión". Al introducir sus datos de usuario puede "Acceder"</p>
                <StaticImage src="../images/iniciosesion.jpg"/>
                <StaticImage src="../images/acceder.jpg"/>
                <h4 className="titulo4">Recuperar contraseña:</h4>
                <p className="texto">Pulsa en el botón de Recuperar Contraseña para poder introducir tu correo electrónico y recibir un enlace de reestablecimiento de contrseña.</p>  
                <StaticImage src="../images/recuperar-contraseña.jpg"/>  
                
                <h3 id="panel-control" className="titulo3">PANEL DE CONTROL</h3>
                <p className="texto">Al iniciar sesión, serás dirigido al panel de control. Aquí tendrás accesos directos a las acciones más relevantes, entre ellas la Creación de QR</p>
                <StaticImage src="../images/crearqr.jpg"/>
                
                <h3 id="creacion-codigos" className="titulo3">CREACIÓN DE CÓDIGOS QR</h3>
                <h4 className="titulo4">Generar Código QR Básico</h4>
                <h5 className="titulo5">Selecciona el Tipo de Contenido:</h5>
                <p className="texto">Selecciona el tipo de contenido que deseas codificar (URL, Texto, Localización, etc.).</p>

                <h5 className="titulo5">Introduce la Información:</h5>
                <p className="texto">Completa los campos necesarios según el tipo de contenido seleccionado.
                Para una URL, introduce el enlace completo.
                Para un texto, escribe el mensaje que deseas codificar.</p>
                <StaticImage src="../images/introducir-info.jpg"/>
                <h4 className="titulo4">Generar Código:</h4>
                <p className="texto">Haz clic en el botón "Generar Código QR".
                El código QR básico aparecerá en la pantalla.</p>
                <StaticImage src="../images/generar.jpg"/>

                <h3 id="opciones-avanzadas" className="titulo3">OPCIONES AVANZADAS</h3>
                <h4 className="titulo4">Configuración Avanzada:</h4>
                <p className="texto">Antes de generar el código, puedes acceder a opciones avanzadas como la corrección de errores y el tamaño del código.
                Ajusta la corrección de errores (L, M, Q, H) según el nivel de resistencia al daño que necesites.</p>
                
                <h3 id="personalizacion" className="titulo3">PERSONALIZACIÓN DE CÓDIGOS QR</h3>
                <h4 className="titulo4">Modificar Tamaño</h4>
                <h5 className="titulo5">Seleccionar Tamaño:</h5>
                <p className="texto">Elige entre diferentes tamaños para tu código y visualiza los cambios en tiempo real.</p>
                <h4 className="titulo4">Cambiar Color</h4> 
                <h5 className="titulo5">Seleccionar Colores:</h5>
                <p className="texto">En la sección de personalización, elige los colores para el fondo y el primer plano del código QR.
                Utiliza el selector de color o introduce los códigos hexadecimales de los colores deseados.</p>
                <StaticImage src="../images/personalizacion.jpg"/>
                
                <h3 id="gestion-codigos" className="titulo3">GESTIÓN DE CÓDIGOS QR</h3>
                <h4 className="titulo4">Guardar y Descargar</h4>
                <h5 className="titulo5">Guardar:</h5>
                <p className="texto">Una vez que el código QR esté listo, haz clic en "Guardar".
                Asigna un nombre y una descripción al código QR para identificarlo fácilmente.</p>
                <h5 className="titulo5">Descargar:</h5>
                <p className="texto">Descarga el código QR en varios formatos (PNG, SVG, JPG).
                Elige la resolución y tamaño adecuados para tus necesidades.</p>
                <StaticImage src="../images/formato-descarga.jpg"/>
            </div>
        </Layout>
    );
};

export default Manual;
