import React, { useState } from 'react'
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ( {category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }

    useEffect( () => {
            getImages();
            //getGifs(category);
    }, [])
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    //extraemos el nombre y el titulo del GIF
                    images.map((image) =>(
                        <GifItem 
                            key={ image.id }
                            //repartir las propiedades sin tener que declararlas
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
