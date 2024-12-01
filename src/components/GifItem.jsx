// Importa React para crear el componente
import React from 'react';

// Componente funcional para renderizar un GIF individual
export const GifItem = ({ title, url }) => {
    // Recibe dos propiedades:
    // - `title`: El título descriptivo del GIF
    // - `url`: La URL de la imagen GIF

    return (
        // Contenedor principal con la clase "card" para aplicar estilos
        <div className="card">
            {/* Imagen del GIF */}
            <img 
                src={url} // Establece la URL de la imagen
                alt={title} // Usa el título como texto alternativo para accesibilidad
            />
            {/* Título del GIF */}
            <p>{title}</p> {/* Muestra el título debajo del GIF */}
        </div>
    );
};

