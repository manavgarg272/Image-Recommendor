import React from "react";
import "./ImagesRecommended.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

import Data from "./data.json";
import { Fragment } from "react";

function ImagesRecommended() {
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
            {Object.keys(Data).map((keyName, j) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={require(`./images/${keyName}`).default}
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
