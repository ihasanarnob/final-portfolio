import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img1 from '../../Images/1.png'
import img2 from '../../Images/2.png'
import img3 from '../../Images/3.png'
import img4 from '../../Images/4.png'


const Projects = () => {
    return (
        <div className="container">
            <h2>Projects</h2>
            {/* .................................... */}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ASAP WHEELS</h5>
                            <p className="card-text">Authenticated user can order any product available in the website. User can see his
                                order details in dashboard.Website Admin can add or remove products.Admin have the access to
                                make others admin.</p>
                            <Link to="/project1">
                                <Button className="btn btn-danger px-5"> Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TREK HEAVEN</h5>
                            <p className="card-text">Authenticated user can book any trek package. After booking any package,user
                                can cancel it from 'My Order' page. Admin can add new packages.</p>
                            <Link to="/project2">
                                <Button className="btn btn-danger px-5"> Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PILLS & CURE</h5>
                            <p className="card-text">Authenticated user can have avalaible nursing care available in website .User can
                                choose any service from 'Services' page. Also can get specific details about selected service.</p>
                            <Link to="/project3">
                                <Button className="btn btn-danger px-5"> Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TITAN LANGUAGE CLUB</h5>
                            <p className="card-text">Authenticated user can have avalaible nursing care available in website .User can
                                choose any service from 'Services' page. Also can get specific details about selected service.</p>
                            <Link to="/project4">
                                <Button className="btn btn-danger px-5"> Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* .................................... */}
        </div>
    );
};

export default Projects;