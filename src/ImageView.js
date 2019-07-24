import React from 'react';
import OpenSeadragon from 'openseadragon';


             
class ImageView extends React.Component {
    
    
    render() {
      let self = this;
      let id  = 'ocd-viewer';
      return (
        <div className="openseadragon" id={id}></div>
      )
    }

    initSeaDragon(){
        let self = this
        let { id, image } = this.props
        
            self.viewer =  OpenSeadragon({
              id: id,
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
       
    }

    componentDidMount(){
      this.initSeaDragon()
    }
    
     
}


ImageView.defaultProps = { id: 'ocd-viewer',  type:'legacy-image-pyramid' }


export default ImageView;

