import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import img1 from '../../Images/trek1.png';
import img2 from '../../Images/trek2.png';
import img3 from '../../Images/trek3.png';
const Project2 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h3>Trek Heaven</h3>
                    <ul>
                        <li>
                            Open Discussion: Given the fact that tourism industry is one of the biggest industries in Nepal; there are many travels available for you to choose from. Among all of them, you might be wondering why you should choose Hike Heaven, right?</li>
                        <li>   About Us:Hike Heaven provides you with varieties of trekking and travel packages. Our guides are very professional and friendly. The reviews we have from our clients speak for our goodness. We provide trekking packages such as Everest trekking, Annapurna trekking, Manaslu trekking, Langtang trekking and many more. We also provide city tours, cycling, varieties of one-day hiking and the like. We are famous for outstanding customer services thanks to our friendly guides. Some of our one-day hiking packages include places like Nagarjuna hill, Sankhu Nagarkot, Chandragiri Hill, Chandragiri Hill, Fulchoki Kathmandu etc. We also provide short tour packages of two nights and three days, a;ong which Chisapani- Nagarkot, Namobuddha- Dhulikhel etc. Our other services include rafting, kayaking, jungle safari, paragliding, mountain flight, bungee jumping and the list goes on and on. In addition to all of these external services, we never fail to delight our customers.
                        </li>
                        <li>   Our Responsibility: Our itinerary has been carefully formulated in order to give you the best experience in a short period of time. However, if you wish to embark on a journey with your tailor made itinerary, we are ready to cater to your needs and carry out tailor made treks all across Nepal.
                        </li>
                        <li>   Information:We make it a point to ensure that all of our activities are for the benefit of the environment and does not affect the environment in any way. Our activities are carried out in accordance with the laws of the environment, and we carefully eliminate waste products that might hamper the environment. Choose us, and you are surely set to return home satisfied with the services offered...

                        </li>
                        <li>  Customer Safety: While we focus on creating good memories for our customers, customer safety and security is the most important consideration we take when carrying out these endeavors. We have a team of experienced guides and climbers, the necessary training, and the necessary equipment to make your endeavors safe.  </li>
                    </ul>
                    <a href="https://nepal-trek-assignment.web.app/" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-success m-2 px-3"> Live Link </Button> </a>
                    <a href="https://github.com/ihasanarnob/travel-project-client-side" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Client Side Github Link  </Button> </a>
                    <a href="https://github.com/ihasanarnob/tarvel-project-server-side" target="_blank" rel="noreferrer noopener" > <Button className="btn btn-primary m-2 px-3"> Server Side Github Link  </Button> </a>
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

export default Project2;