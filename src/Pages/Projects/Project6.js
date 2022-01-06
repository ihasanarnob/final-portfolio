import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import img1 from '../../Images/6.png';
import img2 from '../../Images/project6-ss2.png';
import img3 from '../../Images/bike3.png';
const Project1 = () => {
    return (
        <div>

            <Container>
                <Row>
                    <h3>Super Cars 2021</h3>
                    <ul>
                        <li>
                            Open Discussion: Reviews providing the experiences of bike owner. Here bike owners sharing their views about bike. It includes advantages , disadvantages and valuable suggestions regarding the bike.</li>
                        <li>   About Us: ASAP WHEELS is one of the most popular websites about motorcycle in Bangladesh. We have started our journey since 25th August 2018. We have experienced and hard working team and our prime goal is to provide motorcycle related necessary information to the visitors in easy way.</li>
                        <li>   Our Responsibility: We provide specifications of bike so that our visitors can get details information about our listed bike. This information will help them to compare one bike to another and take right decision regarding bike selection.Through the news we provide updated information about bikes it also includes upcoming bike news in Bangladeshi market. </li>
                        <li>   Information: We also providing showroom address and brand details etc. with the help of showroom address our visitors can get the chance to visit their nearest bike showroom to get his dream bike. We all know brand is a very important factor to purchased any product. When it is about bike then its become more concern. So we are sharing information as much as possible about world famous brand.
                            Gratitude
                        </li>
                        <li>   Technologies: Bootstrap,JavaScript,React,Node,Express,MongoDB,Firebase    </li>
                    </ul>
                    <a href="https://supercartesla.netlify.app/" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-success m-2 px-3"> Live Link </Button> </a>
                    <a href="https://github.com/ihasanarnob/Ecom-website" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Client Side Github Link  </Button> </a>
                    <a href="https://github.com/ihasanarnob/ihasanarnob-car-sever-side" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Server Side Github Link  </Button> </a>
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

export default Project1;