import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import img1 from '../../Images/japan1.png';
import img2 from '../../Images/japan2.png';
import img3 from '../../Images/japan3.png';

const Project4 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h3>Titan Japanese Language Center </h3>
                    <ul>
                        <li>
                            Open Discussion:In Titan Japanese Language Center , native Japanese teachers take classes in Japanese, Bengali and English. Students can watch Japanese movies and animations, and know about latest Japanese culture. They can also learn business manners through our Japanese classes...
                        </li>
                        <li>   About Us:We offer basic Japanse conversation courses taught by an experienced Japanese native teacher, 'Kuni'. You can also learn business conversation and business manners to help you to communicate in Japanese in your business context.

                        </li>
                        <li> Message: In this ever changing field of health care where shorter hospital stays is the trend, the need for skilled as well as non-skilled nursing in the private home increases. We at home nursing service in bangladesh have been helping families achieve the highest level of care possible in home nursing services. Our primary concern is to provide our patient with the exact care prescribed by his or her physician. We are in close contact with a patient’s physician at all times and work specifically with written doctor’s orders.
                        </li>

                        <li>  Mission: Home language service in Bangladesh provides services to families to help clients remain in their home. We enable the client to maintain an optimum level of well-being while maximizing their independence and freedom of choice at a very affordable cost for both long and short-term care.Clients and their families receive one-on-one attention from our professional staff </li>
                        <li>   Technologies: Bootstrap,JavaScript,React,Node,Express,MongoDB,Firebase    </li>
                    </ul>
                    <a href="https://titan-language.netlify.app/" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-success m-2 px-3"> Live Link </Button> </a>
                    <a href="https://github.com/ihasanarnob/language-club-project" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Client Side Github Link  </Button> </a>

                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={img1} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={img2} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={img3} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project4;