import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="banner">
            <div className="main-info">
                <h3 className="mt-5">Hey there!</h3>
                <h1>My name is MD. IFTEKHAR HASAN</h1>
                <h4>I am a Junior Front-End Web Developer</h4>

                <a href="https://drive.google.com/uc?id=1wJaJa5Yk34urjdUqlNV435xYaQR3I0Ip&export=download" download > <Button className="px-5 py-2 mt-2" variant="danger">DOWNLOAD RESUME</Button>  </a>


            </div>
        </div >
    );
};

export default Home;