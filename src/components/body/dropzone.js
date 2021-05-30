import React, { Fragment, Component, useSate } from "react";
import { Button } from "react-bootstrap";
import img2 from "../../BackgroundImage/michael-fertig-L-DNc4K8_oo-unsplash.jpg";
const DropzoneDialogExample = () => {
  // C:\Users\Manavgarg\Desktop\Image-Recommendor-master\src\BackgroundImage\michael-fertig-L-DNc4K8_oo-unsplash.jpg

  const handleSave = async (e) => {
    //Saving files to state for further use and closing Modal.
    var file = e.target.files;
    var binaryData = [];
    binaryData.push(file);
    const blob = await blob(binaryData);
    var url = window.URL.createObjectURL(blob);
    console.log("Check URL : ", url);
    console.log(e.target.files);
    console.log(e.target.result);
  };

  return (
    <Fragment>
      <div
        style={{ marginTop: "10%", height: "600px", width: "700px" }}
        className="mb-2"
      >
        <img
          src={img2}
          style={{
            width: "100%",
            height: "70%",
            paddingLeft: "0%",
            borderStyle: "solid",
            borderColor: "white",
          }}
        />
        <input
          type="file"
          onChange={handleSave}
          style={{ width: "100px", marginLeft: "45%", marginTop: "5%" }}
        />
      </div>
    </Fragment>
  );
};

export default DropzoneDialogExample;
