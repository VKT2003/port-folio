import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './Footer.css';
import Frame1 from '../../Assets/Frame1.png';
import Frame2 from '../../Assets/Frame2.png';
import Frame3 from '../../Assets/Frame3.png';
import Frame4 from '../../Assets/Frame4.png';
import logo from '../../Assets/Logo.png';
import rectangle97 from '../../Assets/Rectangle97.png';
import rectangle99 from '../../Assets/Rectangle99.png';
import rectangle100 from '../../Assets/Rectangle100.png';
import linkedin from '../../Assets/LinkedIn.png';
import facebook from '../../Assets/Facebook.png';
import instagram from '../../Assets/Instagram.png';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className='top'>
                    <div className='logo'>
                        <div className="footer-logo">
                            <img src={Frame1} alt="Logo" />
                            <img src={Frame2} alt="Logo" />
                            <img src={Frame3} alt="Logo" />
                            <img src={Frame4} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <img src={logo} alt="logo" />
                    <div className='links'>
                        <div className="left">
                            <div className="logos">
                                <ul>
                                    <li>
                                        <img src={rectangle97} alt="Logo" />
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </li>
                                    <li>
                                        <img src={rectangle99} alt="Logo" />
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </li>
                                    <li>
                                        <img src={rectangle100} alt="Logo" />
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className="footer-links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Skills</a></li>
                                    <li><a href="/">Education</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/">Recommendations</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h3>Portfolio</h3>
                                <ul>
                                    <li><a href="/">Frontend Development</a></li>
                                    <li><a href="/">Backend Development</a></li>
                                    <li><a href="/">Website Design</a></li>
                                    <li><a href="/">Machine Learning</a></li>
                                    <li><a href="/">Problem Solving & DSA</a></li>
                                </ul>
                            </div>
                            <div className="footer-social">
                                <h3>Connect</h3>
                                <ul>
                                    <li><a href="/">
                                        <img src={linkedin} alt='logo' />
                                    </a></li>
                                    <li><a href="/">
                                        <img src={instagram} alt='logo' />
                                    </a></li>
                                    <li><a href="/">
                                        <img src={facebook} alt='logo' />
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <Col md={12}>
                        <div className="footer-copyright">
                            <p>
                                &copy; 2024 Copyright, All Right Reserved
                            </p>
                        </div>
                    </Col>
                </div>
            </Container>
        </footer >
    );
};

export default Footer;
