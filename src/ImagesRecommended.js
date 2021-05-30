import React, { useState } from "react";
import "./ImagesRecommended.css";
import { Card, Row, Col } from "react-bootstrap";
import url from "./BackgroundImage/freeimg_89251639freejpg850.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Data from "./data.json";
import { Fragment } from "react";
function ImagesRecommended() {
  return (
    <Fragment>
      <div className="SimilarApp_header">
        <div className="SimilarApp_header_text">
          <h1>MAJOR PROJECT IT EVENING</h1>
        </div>
      </div>
      <div className="ImagesRecommended">
        <div className="ImagesRecommended_text">
          <h1>Similar Images Recommended</h1>
        </div>

        <div className="ImagesRecommended_card">
          <Row xs={1} md={3} className="g-4 ImagesRecommended_card_row">
            {Object.keys(Data).map((keyName, i) => (
              <Col>
                <Card>
                  {console.log(keyName)}
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
