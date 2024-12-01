// Importa React, la biblioteca principal para crear componentes
import React from 'react';

// Importa ReactDOM para renderizar componentes de React en el DOM
import ReactDOM from 'react-dom/client';

// Importa el componente principal de la aplicación, `GifExpertApp`
import { GifExpertApp } from './GifExpertApp';

// Importa los estilos globales de la aplicación
import './styles.css';

// Renderiza la aplicación dentro del elemento raíz del DOM (con el id 'root')
ReactDOM.createRoot(document.getElementById('root')).render(
  // Envoltorio en StrictMode para habilitar comprobaciones adicionales y advertencias en desarrollo
  <React.StrictMode>
    {/* Renderiza el componente principal `GifExpertApp` */}
    <GifExpertApp />
  </React.StrictMode>,
);