import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import img1 from '../../Images/nursing1.png';
import img2 from '../../Images/nursing2.png';
import img3 from '../../Images/nursing3.png';

const Project3 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h3>Pills & Cure </h3>
                    <ul>
                        <li>
                            Open Discussion:Pills & Cure is a Home Health nursing home service in Dhaka Agency. The office is located in House- 40, Nadda Road, Bashundhara, Dhaka. It employs Registered Nurses, Licensed Practical Nurses, and Nursing Assistants. Services can be provided by a Registered Nurse on an intermittent visit basis as outlined by Medicare regulations, Home Nursing Services can also be provided as warranted.
                        </li>
                        <li>   About Us:Pills & Cure is dedicated to providing competent and compassionate nursing care. Our company was founded on these ideals in 2005 and today enjoys the finest of reputations in the home nursing field.

                            Our caring staff of trained professionals and nurse’s aides is reliable, well skilled individuals who take pride in the excellent work they perform. We provide registered nurses, licensed practical nurses and nurse assistants. Our services are available 365 days per year and 24 hours each day. For any emergency, a 24 hour per day “on call” service is provided by our management staff.

                            Quality nursing services are built on strong, understanding and involved management. We emphasize and encourage the personal interacting of our staff with our patients and their families. We realize an illness not only affects the patient, but everyone who touches that individual’s life.


                        </li>
                        <li> Message: In this ever changing field of health care where shorter hospital stays is the trend, the need for skilled as well as non-skilled nursing in the private home increases. We at home nursing service in bangladesh have been helping families achieve the highest level of care possible in home nursing services. Our primary concern is to provide our patient with the exact care prescribed by his or her physician. We are in close contact with a patient’s physician at all times and work specifically with written doctor’s orders.
                        </li>
                        <li>   Information:We are a small family owned and operated business.
                            We have been in business since 2005.
                            We are State licensed and Medicare certified.
                            Our staff is actually hired employees they are not contracted out from other agencies...

                        </li>
                        <li>  Mission: Home nursing service in Bangladesh provides services to families to help clients remain in their home. We enable the client to maintain an optimum level of well-being while maximizing their independence and freedom of choice at a very affordable cost for both long and short-term care.Clients and their families receive one-on-one attention from our professional staff </li>
                    </ul>
                    <a href="https://pills-cure-medical.web.app/" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-success m-2 px-3"> Live Link </Button> </a>
                    <a href="https://github.com/ihasanarnob/nursing-home-project" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Client Side Github Link  </Button> </a>

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

export default Project3;