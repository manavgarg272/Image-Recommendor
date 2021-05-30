import React, { useState } from "react";
import "./ImagesRecommended.css";
import { Card, Row, Col } from "react-bootstrap";
import url from "./BackgroundImage/freeimg_89251639freejpg850.jpg";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

import Data from "./data.json";
import { Fragment } from "react";
import fs from "fs";
// import img from "./images/1865b907-c727-45f4-8130-3c96d0fd09bd";
// const fs = require("fs");

function importAll(r) {
  return r.keys().map(r);
}

// function myImages(r) {
//   // const xyz = "./images/" + r;
//   // console.log(typeof xyz );
//   const images = importAll(
//     require.context("./images/" + r, false, /\.(png|jpe?g|svg)$/)
//   );

//   console.log(images);
// }

function ImagesRecommended() {
  var url = "";

  const myImages = (r) => {
    const images = importAll(
      require.context("./images/" + r, false, /\.(png|jpe?g|svg)$/)
    );

    console.log(images);
  };

  return (
    <Fragment>
      <div className="ImagesRecommended">
        <div className="SimilarApp_appbar">
          <AppBar position="static" className="SimilarApp_appbar_2">
            <Toolbar>
              <Typography variant="h6" className="hello">
                SIMILAR IMAGE RECOMMENDER
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className="ImagesRecommended_card">
          <Row xs={1} md={3} className="g-4 ImagesRecommended_card_row">
            {Object.keys(Data).map((keyName, i) => (
              <Col>
                <Card>
                  {myImages(keyName)}

                  <Card.Img
                    variant="top"
                    src={url}
                    className="ImagesRecommended_card_image"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="ImagesRecommended_button">
          <Link to={"/"}>
            <Button variant="contained" color="secondary">
              GO BACK
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
export default ImagesRecommended;

// 'C:/Users/Manavgarg/Desktop/images/ '+ {keyName} +
// {require('/images/' + {keyName} + )}
