import React, { Fragment,Image } from 'react';
import Body from './components/body/body'
import img1 from './BackgroundImage/guillermo-ferla-Oze6U2m1oYU-unsplash.jpg'
function App() {
  return (
    
    <Fragment>
      <img src = {img1} style={{width:"100%",position:"absolute",top:"0px",zIndex:"-1"}} />
      <img src = {img1}  style={{width:"100%",position:"absolute",top:"700px",zIndex:"-1"}}/>
      <Body id="bodytest" />
    </Fragment>
  );
}

export default App;

