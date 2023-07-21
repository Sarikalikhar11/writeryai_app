import React, { useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './footer.css';
import ReCAPTCHA from 'react-google-recaptcha';
import env from 'react-dotenv';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  const sitekey = process.env.REACT_APP_SITE_KEY;
  const captchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  };

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col xs lg="4">
              <h1 className="ms-5 text-white mt-5 fs-1 fw-normal">
                Writery<span className="text-info">Ai</span>
              </h1>
            </Col>
            <Col>
              <h4 className="mt-5 text-white fw-normal mb-4">
                Subscribe to our newsletter
              </h4>
              <Form className="footer_form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className="d-flex">
                    <div className="me-5">
                      <Form.Label className="text-secondary ms-4">
                        Name
                      </Form.Label>
                      <Form.Control
                        className="form-control rounded-pill"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="ms-5">
                      <Form.Label className="text-secondary ms-4">
                        Email
                      </Form.Label>
                      <Form.Control
                        className="form-control rounded-pill"
                        type="email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <ReCAPTCHA
                    sitekey={{ sitekey }}
                    onChange={onChange}
                    className="mt-3"
                    ref={captchaRef}
                  />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn rounded-pill mt-3 ps-4 pe-4 text-white text-bold"
                  >
                    Submit
                  </button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <div className="footer_menu text-white mt-5 d-flex">
              <Col>
                <ul>
                  <h6 className="fs-5 fw-bold">Solutions</h6>
                  <li>
                    <Link to="#">Business AI Cloud</Link>
                  </li>
                  <li>
                    <Link to="#">Creator AI Cloud</Link>
                  </li>
                  <li>
                    <Link to="#">Writerly Go</Link>
                  </li>
                  <li>
                    <Link to="#">Writerly Chat</Link>
                  </li>
                  <li>
                    <Link to="#">EKOM</Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <h6 className="fs-5 fw-bold">About</h6>
                  <li>
                    <Link to="#">User Reviews</Link>
                  </li>
                  <li>
                    <Link to="#">Newsroom</Link>
                  </li>
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <h6 className="fs-5 fw-bold">Community</h6>
                  <li>
                    <Link to="#">Knowledge Center</Link>
                  </li>
                  <li>
                    <Link to="#">Facebook Group</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <h6 className="fs-5 fw-bold">Pricing</h6>
                  <li>
                    <Link to="#">Pricing Plans</Link>
                  </li>
                  <li>
                    <Link to="#">Log In</Link>
                  </li>
                  <li>
                    <Link to="#">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <h6 className="fs-5 fw-bold">Social</h6>
                  <li>
                    <Link to="fb">
                      <FaFacebookF />
                      &nbsp;&nbsp;Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="insta">
                      <FaInstagram />
                      &nbsp;&nbsp;Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="twit">
                      <FaTwitter />
                      &nbsp;&nbsp;Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/linkd">
                      <FaLinkedin />
                      &nbsp;&nbsp;LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link to="/yt">
                      <FaYoutube />
                      &nbsp;&nbsp;Youtube
                    </Link>
                  </li>
                </ul>
              </Col>
            </div>
            <div className="line-divider mt-5"></div>
          </Row>
          <Row className="footer_bottom mt-5 text-secondary">
            <Col>
              <p className="mb-5 ms-5">
                © 2023 Writerly Technologies, Inc. All rights reserved.
              </p>
            </Col>
            <Col>
              <ul className="terms d-flex mb-5">
                <li>
                  <Link to="/cookie" className="link ms-5 text-secondary">
                    Cookie Preferences
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="link ms-5 text-secondary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="link ms-5 text-secondary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
