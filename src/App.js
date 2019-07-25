import React from 'react';
import './App.css';
import ImageView from './ImageView.js';

class App extends React.Component {
	
  render() {
    return <div className = "app">				    	     
			 <ImageView id='ocd-viewer' image='https://shamsula.github.io/image-files/'/>
           </div>;
  }
}

export default App;
