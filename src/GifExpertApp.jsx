import { useState, useEffect } from "react";
import { getGifs } from "./helpers/getGifs";
import GifNext from "./components/GifNext";

export const GifExpertApp = () => {
    const [category] = useState("cats");
    const [gifs, setGifs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState([]); // Almacena comentarios para cada GIF
    const [currentComment, setCurrentComment] = useState(""); // Comentario actual
    const [isCommentVisible, setIsCommentVisible] = useState(false); // Mostrar/Ocultar comentarios

    // Fetch GIFs
    const fetchGifs = async () => {
        const fetchedGifs = await getGifs(category);
        setGifs(fetchedGifs);
        setComments(Array(fetchedGifs.length).fill([])); // Crear array vacío de comentarios para cada GIF
    };

    // Cambia el estado del botón Like
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    // Agrega un comentario al GIF actual
    const addComment = () => {
        if (currentComment.trim() === "") return; // No agrega comentarios vacíos
        const newComments = [...comments];
        newComments[currentIndex] = [...newComments[currentIndex], currentComment];
        setComments(newComments);
        setCurrentComment(""); // Limpia el input
    };

    useEffect(() => {
        fetchGifs();
    }, []);

    return (
        <div className="app-container">
            {/* Encabezado */}
            <header className="header">
                <div className="user-icon" style={{ backgroundColor: "#1c1c1c" }}>
                    <img src="src/IMG-Insta/usuario.png" alt="User" className="icon" />
                </div>
                <span className="username">Rodrigo Gaxiola</span>
                <input type="text" placeholder="Buscar" className="search-bar" />
                <img src="src/IMG-Insta/menu.png" alt="Menu" className="icon" />
            </header>

            {/* Contenedor del GIF */}
            <main className="gif-container">
                {gifs.length > 0 ? (
                    <img src={gifs[currentIndex].url} alt={gifs[currentIndex].title} className="gif" />
                ) : (
                    <p>Cargando GIFs...</p>
                )}
            </main>

            {/* Barra inferior */}
            <footer className="footer">
                {/* Componente GifNext */}
                <GifNext
                    setCurrentIndex={setCurrentIndex}
                    gifsLength={gifs.length}
                    setIsLiked={setIsLiked}
                    setIsCommentVisible={setIsCommentVisible}
                />

                {/* Botón Like */}
                <img
                    src={isLiked ? "src/IMG-Insta/corazon-rojo.png" : "src/IMG-Insta/corazon-blanco.png"}
                    alt="Like"
                    className="icon like-icon"
                    onClick={toggleLike}
                />

                {/* Botón Comentarios */}
                <button
                    className="comment-button"
                    onClick={() => setIsCommentVisible(!isCommentVisible)}
                >
                    <img
                        src="src/IMG-Insta/comentario.png"
                        alt="Comentarios"
                        className="icon comment-icon"
                    />
                </button>
            </footer>

            {/* Ventana de comentarios */}
            {isCommentVisible && (
                <div className="comment-section">
                    <h2>Comentarios</h2>
                    <div className="comment-list">
                        {comments[currentIndex].length > 0 ? (
                            comments[currentIndex].map((comment, index) => (
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
                            value={currentComment}
                            onChange={(e) => setCurrentComment(e.target.value)}
                            className="comment-input"
                        />
                        <button onClick={addComment} className="add-comment-button">
                            Agregar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GifExpertApp;

