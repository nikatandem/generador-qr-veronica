import React from 'react';
import { Link } from 'gatsby';
import "./menulateral.css"

export const HamburgerMenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <HamburgerMenu bgColor="bg-indigo-900" textColor="text-white">
      <HamburgerMenuToggler toggle={toggle} />
      <HamburgerMenuCollapse open={open}>
        <HamburgerMenuNav>
          <HamburgerMenuItem>    
          <div className="leteral">
    <div className="lista">
        <div className="menu-item">
               <div className="text-wrapper">Menú</div>
            </div>

            <div className="menu-item-2"><Link to="/inicio">
                <a className="text-wapper-2" >Inicio</a></Link>
            </div>
            
            <div className="menu-item-2">
            <Link to="/crear-qr">
               
                <a className="text-wapper-2">Crear QR</a>
                </Link>
             </div>
             <div className="menu-item-2">
             <Link to="#">
               
                 <a className="text-wapper-2">Manual de uso</a>
               </Link>
             </div>
      
             <div className="title">
                 <div className="text-wrapper">Mi perfil</div>
            </div>
            <div className="menu-item-2">
             <Link to="#">
            
                 <a className="text-wapper-2">Historial QR</a>
                 </Link>
             </div>
             <div className="menu-item-2">
             <Link to="#">
               
                 <a className="text-wapper-2">Ajustes</a>
                 </Link>
             </div>
             <div className="menu-item-2">
             <Link to="/formulario">
                
                 <a className="text-wapper-2">Cerrar sesión</a>
                 </Link>
             </div>
         </div>
     </div>
 
          </HamburgerMenuItem>
        </HamburgerMenuNav>
      </HamburgerMenuCollapse>
    </HamburgerMenu>
  );
};

/* Logic */

const style = {
  nav: `block pl-0 mb-0`,
  navbar: `font-light shadow py-2 px-4`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

function HamburgerMenu({ children, bgColor, textColor }) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuBrand({ children, href }) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

function HamburgerMenuToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function HamburgerMenuCollapse({ children, open }) {
  const ref = React.useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children }) {
  return <ul className={style.nav}>{children}</ul>;
}

function HamburgerMenuItem({ children }) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuLink({ children, href }) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}




// MenuLateral.propTypes = {
//     home:PropTypes.string,
//     qrCodeScan: PropTypes.string,
//     questionCircle: PropTypes.string,
//     list: PropTypes.string,
//     gear: PropTypes.string,
//     exit: PropTypes.string,
// };
