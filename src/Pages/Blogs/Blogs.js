import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import reactBg from '../../Images/react-bg.jpeg'
import mongoBg from '../../Images/MongodbBG.png'

const Blogs = () => {
    return (
        <div className="container mt-5">
            <Row xs={1} md={2} className="g-2">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={reactBg} />
                        <Card.Body>
                            <Card.Title>React Fundamentals</Card.Title>
                            <Card.Text>
                                This article is not going to cover what React is or why you should learn it. Instead, this is a practical introduction to the fundamentals of React.js for those who are already familiar with JavaScript and know the basics of the DOM API.
                            </Card.Text>
                            <Link to="/blog1">
                                <Button className="btn btn-danger px-5"> View </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mongoBg} />
                        <Card.Body>
                            <Card.Title>MongoDB Fundamentals</Card.Title>
                            <Card.Text>
                                MongoDB is one of the most popular database technologies for handling large collections of data. This book will help MongoDB beginners develop the knowledge and skills to create databases and process data efficiently.
                            </Card.Text>
                            <Link to="/blog2">
                                <Button className="btn btn-danger px-5"> View </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>

    );
};

export default Blogs;