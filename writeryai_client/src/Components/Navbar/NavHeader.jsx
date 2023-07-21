import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigationbar.css';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';

const NavHeader = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [genre, setGenres] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <header className="header">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand href="/" className="text-white fs-3 fw-bold">
              Wr<span className="text-primary">it</span>ery
              <span className="text-primary">Ai</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="nav m-auto justify-content-end"
                style={{ width: '100%' }}
              >
                <Nav.Link
                  href="/about"
                  className="nav-link fs-5 fw-normal text-normal"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="/login"
                  className="nav-link fs-5 fw-normal text-normal"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  href="/pricing"
                  className="nav-link fs-5 fw-normal text-normal"
                >
                  Pricing
                </Nav.Link>
                <Nav.Link
                  href="/chatai"
                  className="nav-link fs-5 fw-normal text-normal"
                >
                  ChatAI
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  className="nav-link fs-5 fw-normal text-normal"
                >
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="hero-section">
          <Container className="text-white">
            <Row>
              <Col className="mt-5">
                <h3 className="mt-4 fw-bold">
                  Unleash Your Creativity with AI-Powered Content
                </h3>
                <p className="mt-4">
                  Demystify Generative AI and Harness Its Power with Writerly's
                  Intuitive and User-Friendly Platform
                </p>
                <button
                  onClick={handleShow}
                  variant="outline-success"
                  type=""
                  className="btn mt-4 mb-5 rounded-pill pe-5 ps-5 fs-5 fw-bold text-white"
                >
                  Start Writing
                </button>
              </Col>
              <Col>
                <Image
                  src="/assets/images/right-header.jpeg rounded"
                  alt=""
                  className="rounded"
                />
              </Col>
            </Row>
            <Modal show={show} onHide={handleClose} className="modal">
              <Modal.Header closeButton>
                <Modal.Title>Create Script</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Untitled Screenplay"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Plot</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Untitled Screenplay"
                      autoFocus
                    />
                  </Form.Group>
                  <h5 className="text-center fw-bold mb-3 mt-4">OR</h5>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Button
                      className="btn btn-outline-secondary"
                      variant="transparent"
                    >
                      Upload .PDF
                    </Button>{' '}
                    <Button
                      className="btn btn-outline-secondary"
                      variant="transparent"
                    >
                      Upload .FDX
                    </Button>{' '}
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="modal_btn"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className="modal_btn"
                  variant="primary"
                  onClick={handleShow}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </section>
      </header>
    </>
  );
};

export default NavHeader;
