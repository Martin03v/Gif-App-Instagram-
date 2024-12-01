// Importa los hooks (Enganchar) de React necesarios para manejar estados y efectos secundarios
import { useState, useEffect } from "react"; 

// Importa una función personalizada para obtener GIFs desde una API o fuente
import { getGifs } from "./helpers/getGifs";

// Importa un componente reutilizable para la navegación entre GIFs
import GifNext from "./components/GifNext";

// Componente principal de la aplicación
export const GifExpertApp = () => {
    // Estado para almacenar la categoría de búsqueda inicial
    const [category] = useState("cats");

    // Estado para almacenar los GIFs obtenidos
    const [gifs, setGifs] = useState([]);

    // Estado para controlar el índice del GIF actualmente mostrado
    const [currentIndex, setCurrentIndex] = useState(0);

    // Estado para indicar si el GIF actual está marcado como "liked" o no
    const [isLiked, setIsLiked] = useState(false);

    // Estado para almacenar los comentarios de todos los GIFs
    const [comments, setComments] = useState([]); 

    // Estado para manejar el comentario actual que el usuario escribe
    const [currentComment, setCurrentComment] = useState("");

    // Estado para controlar la visibilidad de la sección de comentarios
    const [isCommentVisible, setIsCommentVisible] = useState(false);

    // Función asíncrona para obtener GIFs y configurar el estado inicial de los comentarios
    const fetchGifs = async () => {
        const fetchedGifs = await getGifs(category); // Obtiene los GIFs de la categoría especificada
        setGifs(fetchedGifs); // Actualiza el estado con los GIFs obtenidos
        setComments(Array(fetchedGifs.length).fill([])); // Inicializa un array vacío de comentarios para cada GIF
    };

    // Función para alternar el estado del botón "Like"
    const toggleLike = () => {
        setIsLiked(!isLiked); // Cambia entre "liked" y "no liked"
    };

    // Función para agregar un comentario al GIF actual
    const addComment = () => {
        if (currentComment.trim() === "") return; // Evita agregar comentarios vacíos
        const newComments = [...comments]; // Crea una copia del array de comentarios
        newComments[currentIndex] = [...newComments[currentIndex], currentComment]; // Agrega el comentario al GIF actual
        setComments(newComments); // Actualiza el estado con los nuevos comentarios
        setCurrentComment(""); // Limpia el input de comentarios
    };

    // Efecto que se ejecuta al montar el componente para cargar los GIFs
    useEffect(() => {
        fetchGifs(); // Llama a la función para obtener GIFs
    }, []);

    // Renderiza el contenido del componente
    return (
        <div className="app-container">
            {/* Encabezado con el usuario y barra de búsqueda */}
            <header className="header">
                <div className="user-icon" style={{ backgroundColor: "#1c1c1c" }}>
                    <img src="src/IMG-Insta/usuario.png" alt="User" className="icon" />
                </div>
                <span className="username">Rodrigo Gaxiola</span>
                <input type="text" placeholder="Buscar" className="search-bar" />
                <img src="src/IMG-Insta/menu.png" alt="Menu" className="icon" />
            </header>

                        {/* Contenedor principal donde se muestra el GIF actual */}
                        <main className="gif-container">
                {gifs.length > 0 ? (
                    // Si hay GIFs disponibles, se muestra el GIF correspondiente al índice actual
                    <img src={gifs[currentIndex].url} alt={gifs[currentIndex].title} className="gif" />
                ) : (
                    // Mensaje que se muestra mientras se cargan los GIFs
                    <p>Cargando GIFs...</p>
                )}
            </main>

            {/* Barra inferior con navegación, botón de "like" y comentarios */}
            <footer className="footer">
                {/* Componente para navegar entre GIFs */}
                <GifNext
                    setCurrentIndex={setCurrentIndex} // Función para cambiar el índice del GIF mostrado
                    gifsLength={gifs.length} // Número total de GIFs disponibles
                    setIsLiked={setIsLiked} // Función para reiniciar el estado "like" al cambiar de GIF
                    setIsCommentVisible={setIsCommentVisible} // Función para manejar la visibilidad de los comentarios
                />

                {/* Botón para marcar o desmarcar el GIF actual como "liked" */}
                <img
                    src={isLiked ? "src/IMG-Insta/corazon-rojo.png" : "src/IMG-Insta/corazon-blanco.png"} // Icono dinámico según el estado "liked"
                    alt="Like"
                    className="icon like-icon"
                    onClick={toggleLike} // Alterna el estado "liked"
                />

                {/* Botón para mostrar u ocultar la sección de comentarios */}
                <button
                    className="comment-button"
                    onClick={() => setIsCommentVisible(!isCommentVisible)} // Alterna la visibilidad de la sección de comentarios
                >
                    <img
                        src="src/IMG-Insta/comentario.png" // Icono de comentarios
                        alt="Comentarios"
                        className="icon comment-icon"
                    />
                </button>
            </footer>

            {/* Sección emergente para manejar comentarios (visible según el estado) */}
            {isCommentVisible && (
                <div className="comment-section">
                    <h2>Comentarios</h2>
                    <div className="comment-list">
                        {/* Si hay comentarios para el GIF actual, los muestra en una lista */}
                        {comments[currentIndex].length > 0 ? (
                            comments[currentIndex].map((comment, index) => (
                                <p key={index} className="comment">{comment}</p> // Cada comentario se muestra en un párrafo
                            ))
                        ) : (
                            // Si no hay comentarios, muestra un mensaje indicándolo
                            <p className="no-comments">No hay comentarios aún.</p>
                        )}
                    </div>

                    {/* Input para escribir y agregar nuevos comentarios */}
                    <div className="comment-input-container">
                        <input
                            type="text" // Campo de entrada para texto
                            placeholder="Escribe un comentario..." // Texto de ayuda en el input
                            value={currentComment} // Enlaza el valor del input con el estado del comentario actual
                            onChange={(e) => setCurrentComment(e.target.value)} // Actualiza el estado al escribir
                            className="comment-input" // Clase para estilos personalizados
                        />
                        <button onClick={addComment} className="add-comment-button">
                            Agregar {/* Botón para agregar el comentario actual */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Exporta el componente principal para su uso en otras partes de la aplicación
export default GifExpertApp;