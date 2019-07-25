import React from 'react';
import OpenSeadragon from 'openseadragon';
             
class ImageView extends React.Component {
    
  render() {
    let id  = this.props.id;
    return (
      <div className="openseadragon" id={id}></div>
    )
  }
  //faced some issues importing image files from local directory,
  //opted out, instead using images uploade to static github page
  initSeaDragon(){
    let self = this
    let { id, image } = this.props
        
    self.viewer =  OpenSeadragon({
      id: id,
      prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/",
      tileSources: {
        Image: {
		  xmlns: "http://schemas.microsoft.com/deepzoom/2009",
          Url: image,
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
       
    }

  componentDidMount(){
    this.initSeaDragon()
  }
    
     
}


export default ImageView;

