// Función asíncrona para obtener GIFs basados en una categoría
export const getGifs = async (category) => {
    // URL base de la API de Giphy para realizar búsquedas
    const url_parcial = 'https://api.giphy.com/v1/gifs/search?api_key=6A0pRmSJlyXjQma1K4gQMXdI03SzG9mb&q=';
    
    // Objeto que contiene la categoría a buscar
    const cat = { category };

    // Límite de resultados a obtener por consulta
    const limit = '&limit=30';

    // Construcción de la URL final combinando la base, categoría y límite
    const url = url_parcial + cat + limit;

    // Realiza la petición a la API utilizando fetch
    const resp = await fetch(url);

    // Extrae el contenido JSON de la respuesta
    const { data } = await resp.json();

    // Mapea los datos obtenidos para generar un arreglo con información relevante
    const gifs = data.map(img => ({
        // ID único de la imagen
        id: img.id,
        // Título del GIF
        title: img.title,
        // URL de la imagen con tamaño medio optimizado
        url: img.images.downsized_medium.url
    }));

    // Muestra los GIFs en consola para fines de depuración
    console.log(gifs);

    // Devuelve el arreglo de GIFs
    return gifs;
};