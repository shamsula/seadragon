import React, {useEffect} from 'react';
import OpenSeadragon from 'openseadragon';


export function OpenSeaDragon(){
	
	useEffect(() => {
    let self = this
                
    self.viewer =  OpenSeadragon({
      id: 'OSD',
	  prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/",
      tileSources: {
        Image: {
	      xmlns: "http://schemas.microsoft.com/deepzoom/2009",
          Url: "https://shamsula.github.io/image-files/",
          Format: "jpg",
          Overlap: "1",
		  ServerFormat: "Default",
          TileSize: "256",
          Size: {
            Height: "3136",
            Width: "4704"
          }
	    },					 
	  },
    })
  });
  
  
  return (
    <div>
      <ul>
        <div className="openseadragon" ></div>
      </ul>
    </div>
  );
	
}