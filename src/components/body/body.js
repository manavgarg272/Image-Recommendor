import React, { Fragment, useState } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import tileData from './tileData'
import DropzoneDialogExample from './dropzone';
import img1 from '../../BackgroundImage/freeimg_89251639freejpg850.jpg'
import Data from './data.json'

const GiftHome = () => {



  return (
    <Fragment style={{ color: "black", backgroundImage: 'url(' + img1 + ')', backgroundSize: 'auto' }}>

      <Row style={{ marginTop: "1%" }}>
        <a style={{ marginLeft: "16%", fontSize: "60px", color: "white", fontFamily: "Caveat" }}>SIMILAR IMAGE RECOMMENDER WEBSITE  </a>
      </Row>

      <Row style={{ width: "46%", marginLeft: "25%" }} >
        <DropzoneDialogExample />
      </Row>

      <Row style={{ marginTop: "1%" }}>
        <a style={{ marginLeft: "23%", fontSize: "60px", color: "white", fontFamily: "Caveat" }}>SIMILAR IMAGES RECOMMENDED </a>
      </Row>

      <Row style={{ width: "90%", marginLeft: "5%", marginTop: "2%" }} >
        <Col xs={6} md={4}>

          {


            tileData.map((tile) => (
              <Image src={tile.img} rounded style={{ width: "250px", padding: "2%" }} />
            ))

          }


       {
        Object.keys(Data).map((keyName,i) => (
           console.log(keyName)
         ))
       }

          


        </Col>
      </Row>

    </Fragment>
  )
}

export default GiftHome;