// Importa React y los hooks `useState` y `useEffect`
import React, { useState, useEffect } from 'react';
// Importa la función `getGifs` para obtener los datos de los GIFs
import { getGifs } from '../helpers/getGifs';
// Importa el componente `GifItem` para renderizar cada GIF individual
import { GifItem } from './GifItem';

// Componente funcional que renderiza una grilla de GIFs
export const GifGrid = ({ category }) => {
    // Estado para almacenar las imágenes obtenidas
    const [images, setImages] = useState([]);

    // Función para obtener las imágenes llamando a `getGifs`
    const getImages = async () => {
        const newImages = await getGifs(category); // Llama a la función `getGifs` con la categoría como argumento
        setImages(newImages); // Actualiza el estado con las nuevas imágenes
    };

    // Hook `useEffect` para ejecutar el código cuando el componente se monta
    useEffect(() => {
        getImages(); // Llama a la función que obtiene las imágenes
    }, []); // El array vacío asegura que esto se ejecute solo al montar el componente

    return (
        <>
            {/* Muestra la categoría como título */}
            <h3>{category}</h3>
            {/* Contenedor para la grilla de GIFs */}
            <div className="card-grid">
                {
                    // Itera sobre el arreglo de imágenes y renderiza un componente `GifItem` para cada una
                    images.map((image) => (
                        <GifItem
                            key={image.id} // Usa el ID del GIF como clave única para React
                            // Descompone las propiedades del objeto `image` y las pasa al componente `GifItem`
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
};

// Exporta el componente como predeterminado
export default GifGrid;