import React, { useState } from "react";

export const GifComent = () => {
  const [comments, setComments] = useState([]); // Lista de comentarios
  const [inputValue, setInputValue] = useState(""); // Comentario actual
  const [isVisible, setIsVisible] = useState(false); // Mostrar/ocultar sección

    const handleAddComment = () => {
        if (inputValue.trim() === "") return;
        setComments([...comments, inputValue.trim()]); // Agregar comentario
        setInputValue(""); // Limpiar input
    };

    return (
        <>
        {/* Botón de Comentarios */}
        <button 
            className="comment-button"
            onClick={() => setIsVisible(!isVisible)}
        >
            <img 
            src="./src/IMG-Insta/comentario.png" 
            alt="Comentarios"
            className="comment-icon"
            />
        </button>

        {/* Ventana de Comentarios */}
        {isVisible && (
            <div className="comment-section">
            <h2>Comentarios</h2>
            <div className="comment-list">
                {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <p key={index} className="comment">{comment}</p>
                ))
                ) : (
                <p className="no-comments">No hay comentarios aún.</p>
                )}
            </div>
            <div className="comment-input-container">
                <input
                type="text"
                placeholder="Escribe un comentario..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="comment-input"
                />
                <button onClick={handleAddComment} className="add-comment-button">
                Agregar
                </button>
            </div>
            </div>
        )}
        </>
    );
};

export default GifComent;
