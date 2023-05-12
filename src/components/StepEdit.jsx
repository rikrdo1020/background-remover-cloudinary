import React, { useContext, useEffect, useRef, useState } from 'react'
import { ImageContext } from '../store/ImageContext'
import "two-up-element"


function checkImage(imageUrl, onSuccess, onError) {
  const img = new Image();
  img.src = imageUrl;
  img.onload = onSuccess;
  img.onerror = onError;
}

export const StepEdit = () => {
    const { data } = useContext(ImageContext)
    
    const [processingImage, setProcessingImage] = useState(true);
  
    useEffect(() => {
      let intervalId;
      if(processingImage){
        clearInterval(intervalId)
        intervalId = setInterval(() => {
          const img = new Image()
          img.src = data.modifiedImage
          img.onload = () => {
            setProcessingImage(false)
            clearInterval(intervalId)
          }
        }, 500)
      }

    }, []);
    
    
  return (
    <>
        <two-up>
            <img src={data.originalImage} alt="Imagen original subida por el usuario" />
            {
              processingImage 
                ? 
                (<img src={data.originalImage} alt="Imagen original subida por el usuario" style={{filter:"blur(6px)"}}/>)
                : 
                (
                  <img
                    src={data.modifiedImage} 
                    alt="Imagen sin fondo subida por el usuario" 
                  />
                )
            }
            
        </two-up>
        <a 
          href={data.modifiedImage}
          download="imageWithoutBackground" 
          className='block bg-blue-500 hover:bg-blue-700 text-xl text-center w-full font-bold text-white rounded-full px-4 py-2 mt-10'
          target='_blank'
        >
            Descargar imagen sin fondo
        </a>
    </>
    
  )
}
