// Importa React y el hook `useState` para gestionar estados locales
import React, { useState } from "react";

// Componente funcional que gestiona la sección de comentarios
export const GifComent = () => {
// Estado para almacenar la lista de comentarios
const [comments, setComments] = useState([]);
// Estado para almacenar el valor actual del input de comentarios
const [inputValue, setInputValue] = useState("");
// Estado para controlar la visibilidad de la sección de comentarios
const [isVisible, setIsVisible] = useState(false);

// Función para agregar un nuevo comentario
const handleAddComment = () => {
// Verifica si el input no está vacío después de eliminar espacios en blanco
if (inputValue.trim() === "") return;
// Actualiza la lista de comentarios con el nuevo comentario
setComments([...comments, inputValue.trim()]);
// Limpia el campo de input después de agregar el comentario
setInputValue("");
};

return (
<>
    {/* Botón para mostrar/ocultar la sección de comentarios */}
    <button
    className="comment-button" // Clase CSS para estilizar el botón
    onClick={() => setIsVisible(!isVisible)} // Alterna la visibilidad de la sección
    >
    <img
        src="./src/IMG-Insta/comentario.png" // Ruta de la imagen del icono
        alt="Comentarios" // Texto alternativo para accesibilidad
        className="comment-icon" // Clase CSS para estilizar el icono
    />
    </button>

    {/* Sección de comentarios */}
    {isVisible && ( // Solo se muestra si `isVisible` es verdadero
    <div className="comment-section"> {/* Contenedor principal */}
        <h2>Comentarios</h2> {/* Título de la sección */}
        <div className="comment-list"> {/* Lista de comentarios */}
        {comments.length > 0 ? ( // Comprueba si hay comentarios
            comments.map((comment, index) => ( // Mapea y renderiza cada comentario
            <p key={index} className="comment">{comment}</p>
            ))
        ) : (
            // Muestra un mensaje si no hay comentarios
            <p className="no-comments">No hay comentarios aún.</p>
        )}
        </div>
        {/* Contenedor del input para agregar comentarios */}
        <div className="comment-input-container">
        <input
            type="text" // Campo de texto
            placeholder="Escribe un comentario..." // Texto de sugerencia
            value={inputValue} // Valor actual del input
            onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado con el valor del input
            className="comment-input" // Clase CSS para estilizar el input
        />
        <button
            onClick={handleAddComment} // Llama a la función para agregar un comentario
            className="add-comment-button" // Clase CSS para estilizar el botón
        >
            Agregar
        </button>
        </div>
    </div>
    )}
</>
);
};

// Exporta el componente como predeterminado
export default GifComent;