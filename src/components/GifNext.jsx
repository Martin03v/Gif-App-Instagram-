import React from "react";
import PropTypes from "prop-types";

export const GifNext = ({ setCurrentIndex, gifsLength, setIsLiked, setIsCommentVisible }) => {
    // Cambia al siguiente GIF
    const handleNextGif = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gifsLength);
        setIsLiked(false); // Restablece el estado del corazón
        setIsCommentVisible(false); // Oculta comentarios al pasar al siguiente GIF
    };

    // Cambia al GIF anterior
    const handlePreviousGif = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gifsLength) % gifsLength);
        setIsLiked(false); // Restablece el estado del corazón
        setIsCommentVisible(false); // Oculta comentarios al regresar al GIF anterior
    };

    return (
        <>
            {/* Botón No-Next */}
            <img
                src="src/IMG-Insta/no-next.png"
                alt="No Next"
                className="icon no-next-icon"
                onClick={handlePreviousGif}
            />

            {/* Botón Next */}
            <img
                src="src/IMG-Insta/next.png"
                alt="Next"
                className="icon next-icon"
                onClick={handleNextGif}
            />
        </>
    );
};

// Validación de las props
GifNext.propTypes = {
    setCurrentIndex: PropTypes.func.isRequired,
    gifsLength: PropTypes.number.isRequired,
    setIsLiked: PropTypes.func.isRequired,
    setIsCommentVisible: PropTypes.func.isRequired,
};

export default GifNext;
