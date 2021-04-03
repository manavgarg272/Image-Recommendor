import React, {Fragment, Component,useSate } from 'react'
import { Button } from 'react-bootstrap';
import img2 from '../../BackgroundImage/michael-fertig-L-DNc4K8_oo-unsplash.jpg'
const DropzoneDialogExample = () => {
  // C:\Users\Manavgarg\Desktop\Image-Recommendor-master\src\BackgroundImage\michael-fertig-L-DNc4K8_oo-unsplash.jpg
 
   const handleSave = (e) => {
        //Saving files to state for further use and closing Modal.
        console.log(e.target.files)
  
    
    }
 
    
   
        return (
          
          <Fragment >
             
            <div style={{marginTop:"10%" ,height:"600px" , width:"700px" }} className="mb-2">
              <img src={img2}   style={{width:"100%" ,height:"70%",paddingLeft:"0%",borderStyle:"solid" ,borderColor:"white"}} />
              <input  type ="file" onChange = {handleSave}   style={{width:"100px" ,marginLeft:"45%",marginTop:"5%"}}/>
            </div>
             
          </Fragment>
            
        );
   
}

export default DropzoneDialogExample;