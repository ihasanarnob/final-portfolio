import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import reactBg from '../../Images/react-bg.jpeg'

const Blogs = () => {
    return (
        <div className="container mt-5">
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
        </div>

    );
};

export default Blogs;