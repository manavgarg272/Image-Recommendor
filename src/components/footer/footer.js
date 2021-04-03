import React from 'react';
import {Row,Col,Container, Button,Form} from 'react-bootstrap';
import classes from './footer.module.css'
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

const Footer = ()=>{
    return(
        <Container fluid className={classes.Footer}>
            <Row  style={{width:"100%"}}>
                <Col style={{width:"20%"}} >
                  
                        <h3 className={classes.HeadingSub}>COMPANY</h3>
                        <p className={classes.P}>About Us</p>
                        <p className={classes.P}>Our Reach</p>
                        <p className={classes.P}>Ask The Questions</p>
                        <p className={classes.P}>whiteWular Stories</p>
                        <p className={classes.P}>Investor Stories</p>
                        <p className={classes.P}>Leadership Team</p>
                   
                </Col>

                <Col style={{width:"20%"}}>
                        <h3 className={classes.HeadingSub}>Policies</h3>
                        <p className={classes.P}>Privacy Policy</p>
                        <p className={classes.P}>Return Policy</p>
                        <p className={classes.P}>Cancellation Policy</p>
                        <p className={classes.P}>Refund Policy</p>
                        <p className={classes.P}>Payment Security</p>
                        <p className={classes.P}>User Agreement</p>
                        <p className={classes.P}>Right to Forgetten Policy</p>
                        <p className={classes.P}>Cashback Policy</p>
                        <p className={classes.P}>Wallet Policy</p>
                </Col>

                <Col>
                    
                        <h3 className={classes.HeadingSub}>Work With Us</h3>
                        <p className={classes.P}>Careers</p>
                        <p className={classes.P}>Advertise</p>
                        <p className={classes.P}>Become a Supplier/Service Provider</p>
                        <p className={classes.P}>Open Stores</p>
                        <p className={classes.P}>Bug Killers</p>
        
                </Col>
                <Col>
                    <div>
                        <h3 className={classes.HeadingSub}>My Account</h3>
                        <p className={classes.P}>Create Account</p>
                        <p className={classes.P}>Account Login</p>
                        <p className={classes.P}>Wishlist</p>
                        <p className={classes.P}>Returns</p>
                        <p className={classes.P}>Order History</p>
                        <p className={classes.P}>Mobile Applications</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h3 className={classes.HeadingSub}>Share Happiness</h3>
                        <p className={classes.P}>Offers & Promotions</p>
                        <p className={classes.P}>Gift Cards</p>
                        <p className={classes.P}>Send Postcard</p>
                        <p className={classes.P}>Become a premium</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h3 className={classes.HeadingSub}>My Account</h3>
                        <p className={classes.P}>Make A Payment</p>
                        <p className={classes.P}>Find Your Account</p>
                        <p className={classes.P}>File A Complaint</p>
                        <p className={classes.P}>Check Your Order Status</p>
                        <p className={classes.P}>Newsletter</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className={classes.Center} md={4}>
                    <h3 className={classes.FooterSub}>Follow whitewular<span style={{color:'orange'}}>.com</span></h3>
                    <img src={instagram} alt="" className={classes.Social}></img>
                    <img src={facebook} alt="" className={classes.Social}></img>
                    <img src={linkedin} alt="" className={classes.Social}></img>
                    <img src={twitter} alt="" className={classes.Social}></img>
                    <img src={youtube} alt="" className={classes.Social}></img>
                </Col>
                <Col md={6}>
                    <div className={classes.Newsletter}>
                        <h2>JOIN THE NEWSLETTER</h2> 
                        <p>Get the latest updates from the whitewular</p>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm={9} style={{padding:'0'}}>
                                <Form.Control 
                                style={{position: 'relative',verticalAlign: 'top',borderRadius:'0',border:'2px solid orange' }}  
                                type="email" 
                                placeholder="Email Address"/>
                            </Col>
                            <Col sm={3} style={{padding:'0'}}>
                                <Button 
                                size="md" 
                                style={{backgroundColor:'orange',borderRadius:'0',border:'1px solid orange',width:'100%' }}
                                ><i className="fas fa-chevron-right fa-lg"></i></Button>
                            </Col>
                        </Form.Group>
                        <center style={{marginBottom:'3%'}}>or</center>
                        <Form.Group as={Row} controlId="formPlaintextPhone">
                            <Col sm={9} style={{padding:'0'}}>
                                <Form.Control 
                                style={{position: 'relative',verticalAlign: 'top',borderRadius:'0',border:'2px solid orange' }}  
                                type="number" 
                                placeholder="Phone Number"/>
                            </Col>
                            <Col sm={3} style={{padding:'0'}}>
                                <Button 
                                size="md" 
                                style={{backgroundColor:'orange',borderRadius:'0',border:'1px solid orange',width:'100%' }}
                                ><i className="fas fa-chevron-right fa-lg"></i></Button>
                            </Col>
                        </Form.Group>
                    </div>
                </Col> 
            </Row>
        </Container>
    )
}
export default Footer;