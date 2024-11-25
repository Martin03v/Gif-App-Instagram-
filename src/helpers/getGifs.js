
export const getGifs = async( category ) => {
    //llamar a la api [url / api_key:/ categoria / limite]
    const url_parcial = 'https://api.giphy.com/v1/gifs/search?api_key=6A0pRmSJlyXjQma1K4gQMXdI03SzG9mb&q='
    const cat ={ category };
    const limit = '&limit=30'
    const url =url_parcial + cat + limit;
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        //id de imagen
        id: img.id,
        //titulo
        title: img.title,
        //tamaño de imagen
        url: img.images.downsized_medium.url

    }));
    console.log(gifs);
    return gifs;
}