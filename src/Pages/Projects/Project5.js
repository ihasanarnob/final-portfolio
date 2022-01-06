import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import img1 from '../../Images/project5-ss1.png';
import img2 from '../../Images/project5-ss2.png';
import img3 from '../../Images/project5-ss3.png';
const Project5 = () => {
    return (
        <div>

            <Container>
                <Row>
                    <h3>Career Impacts</h3>
                    <ul>
                        <li>
                            Open Discussion: Our website will enable job seekers to publish their resumes and companies can advertise opportunities on this platform, which can be used for professional networking and career advancement..</li>
                        <li>   About Us: Career Impacts is one of the most popular websites about Jobs placement in Bangladesh. We have started our journey since 25th August 2018. We have experienced and hard working team and our prime goal is to provide a better comunication field between job seekers and companies</li>
                        <li>   Our Responsibility: We provide specifications of Jobs so that job seekers can get details information about the posted jobs. This information will help them to compare themselves for the jobs that were posted. </li>

                        <li>   Technologies: Bootstrap,JavaScript,React,Node,Express,MongoDB,Firebase    </li>
                    </ul>
                    <a href="https://career-impacts-fd22e.web.app/" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-success m-2 px-3"> Live Link </Button> </a>
                    <a href="https://github.com/ihasanarnob/career-impacts-client" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Client Side Github Link  </Button> </a>
                    <a href="https://github.com/ihasanarnob/career-impacts-server" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Server Side Github Link  </Button> </a>
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

export default Project5;