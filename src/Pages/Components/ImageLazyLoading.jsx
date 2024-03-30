import React, { useEffect, useState } from 'react';
import {Blurhash} from "react-blurhash";

function ImageLazyLoading({source,height}) {
    const [ImageLoaded, setImageLoaded] = useState(false);

    const loadImage = ()=>{
        const img = new Image();
        img.onload = ()=>{
             setImageLoaded(true);
        }
        img.src = source;
    }
    
    
     useEffect(()=>{
        loadImage();
     },[source]);
    
    
      return (
        <>
           <div style={{display:ImageLoaded ? "none" : "inline"}}>
            <Blurhash   
                 hash="L3Q0gj%M00tR_4js4nj[IVWBs:of"
                 width="100%"
                 height={(height*1 !== null && height*1 > 1) ? height*1 : 200}
                 resolutionX={32}
                 resolutionY={32}
                 punch={1}
            />
            </div>
           <img loading="lazy" role="presentation"  src={source} style={{display: !ImageLoaded ? "none" : "inline"}} />
        </>
      )
    }

export default ImageLazyLoading