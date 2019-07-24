import React from 'react';
import './App.css';
import ImageView from './ImageView.js';
import OpenSeadragon from 'openseadragon';
import { OpenSeaDragon } from './ImageViewer.js';

class App extends React.Component {
  render() {
    return <div className = "app">				
    	     <ImageView  />
           </div>;
  }
}

export default App;
