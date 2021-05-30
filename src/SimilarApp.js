import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SimilarApp.css";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import url from "./BackgroundImage/freeimg_89251639freejpg850.jpg";
import { Fragment } from "react";

function SimilarApp() {
  const [profileImg, setprofileImg] = useState(url);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Fragment>
      <div className="SimilarApp_appbar">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">SIMILAR IMAGE RECOMMENDER</Typography>
          </Toolbar>
        </AppBar>
      </div>

      <div className="SimilarApp">
        <div className="SimilarApp_image">
          <img src={profileImg} alt="" />
        </div>

        <div className="SimilarApp_button">
          <input
            accept="image/*"
            className="SimilarApp_input"
            id="contained-button-file"
            multiple
            type="file"
            onChange={imageHandler}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              UPLOAD IMAGE
            </Button>
          </label>
        </div>

        <div className="SimilarApp_recommend_image">
          <Link to={"/ImagesRecommended"}>
            <Button variant="contained" color="secondary">
              RECOMMEND SIMILAR IMAGES
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
export default SimilarApp;
