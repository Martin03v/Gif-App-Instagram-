// Importa React para crear el componente
import React from "react";

// Importa PropTypes para validar las propiedades del componente
import PropTypes from "prop-types";

// Componente funcional que controla los botones para avanzar o retroceder entre GIFs
export const GifNext = ({ setCurrentIndex, gifsLength, setIsLiked, setIsCommentVisible }) => {
    // Maneja el cambio al siguiente GIF
    const handleNextGif = () => {
        // Incrementa el índice actual de GIF, asegurándose de que no exceda el límite
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gifsLength);

        // Restablece el estado del botón "like" al cambiar de GIF
        setIsLiked(false);

        // Oculta los comentarios al cambiar al siguiente GIF
        setIsCommentVisible(false);
    };

    // Maneja el cambio al GIF anterior
    const handlePreviousGif = () => {
        // Decrementa el índice actual de GIF, asegurándose de que no sea menor a 0
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gifsLength) % gifsLength);

        // Restablece el estado del botón "like" al regresar al GIF anterior
        setIsLiked(false);

        // Oculta los comentarios al cambiar al GIF anterior
        setIsCommentVisible(false);
    };

    return (
        <>
            {/* Botón para retroceder al GIF anterior */}
            <img
                src="src/IMG-Insta/no-next.png" // Ruta de la imagen para el botón de retroceso
                alt="No Next" // Texto alternativo para accesibilidad
                className="icon no-next-icon" // Clase para aplicar estilos al botón
                onClick={handlePreviousGif} // Evento que llama a la función handlePreviousGif
            />

            {/* Botón para avanzar al siguiente GIF */}
            <img
                src="src/IMG-Insta/next.png" // Ruta de la imagen para el botón de avance
                alt="Next" // Texto alternativo para accesibilidad
                className="icon next-icon" // Clase para aplicar estilos al botón
                onClick={handleNextGif} // Evento que llama a la función handleNextGif
            />
        </>
    );
};

// Define los tipos y requisitos de las propiedades que recibe el componente
GifNext.propTypes = {
    // Función para actualizar el índice del GIF actual
    setCurrentIndex: PropTypes.func.isRequired,

    // Longitud del arreglo de GIFs, usada para limitar los índices
    gifsLength: PropTypes.number.isRequired,

    // Función para actualizar el estado del botón "like"
    setIsLiked: PropTypes.func.isRequired,

    // Función para mostrar u ocultar la sección de comentarios
    setIsCommentVisible: PropTypes.func.isRequired,
};

// Exporta el componente por defecto para usarlo en otros módulos
export default GifNext;