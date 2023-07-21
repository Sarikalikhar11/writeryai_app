import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './home.css';

const Home = () => {
  return (
    <>
      <section className="card-section">
        <Container className="card-container">
          <Row>
            <Col>
              <Card style={{ width: '25rem' }} className="card p-3">
                <Card.Body>
                  <Card.Title className="fw-bold text-secondary">
                    <span className="text-primary fs-2 fw-bold">100%</span>
                    &nbsp; Brand Consistency
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '25rem' }} className="card p-3">
                <Card.Body>
                  <Card.Title className="fw-bold text-secondary">
                    <span className="text-primary fs-2 fw-bold">30x</span>&nbsp;
                    ROI
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '25rem' }} className="card p-3">
                <Card.Body>
                  <Card.Title className="fw-bold text-secondary">
                    <span className="text-primary fs-2 fw-bold">&infin;</span>
                    &nbsp; Productivity
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="midsec">
        <Container className="midsec-container mb-5">
          <Row>
            <Col>
              <div className="midsec-left order-1 order-lg-2">
                <Image src="/assets/images/midsec-img.jpeg" fluid />
              </div>
              <div className="midsec-right border-0 order-2 order-lg-1">
                <h2 className="fs-1 mb-2">Always On Brand</h2>
                <p className="">
                  Ensure your content aligns with your brand voice and
                  guidelines every time, thanks to our intelligent brand
                  Personas that adapt to your unique style.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="midsec1-right border-0 order-2 order-lg-1">
                <h2 className="fs-1 mb-2">Intuitive Workspace</h2>
                <p className="">
                  Navigate a user-friendly platform that simplifies content
                  generation, editing, and publishing, maximizing your team's
                  productivity and creative potential.
                </p>
              </div>
              <div className="midsec1-left order-1 order-lg-2">
                <Image src="/assets/images/midsec-img2.jpeg" fluid />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="midsec3-left order-1 order-lg-2">
                <Image src="/assets/images/midsec-img3.png" fluid />
              </div>
              <div className="midsec3-right border-0 order-2 order-lg-1">
                <h2 className="fs-1 mb-2">The Perfect Output, Every time</h2>
                <p className="">
                  Choose from a vast collection of professionally engineered
                  GPT-4 templates for every use case, from marketing and sales
                  enablement to e-commerce and social media.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="midsec4-right border-0 order-2 order-lg-1">
                <h2 className="fs-1 mb-2">Seamless Collaboration</h2>
                <p className="">
                  Invite teammates to create, edit, and collaborate in
                  real-time, streamlining the content creation process and
                  making teamwork effortless.
                </p>
              </div>
              <div className="midsec4-left order-1 order-lg-2">
                <Image src="/assets/images/midsec-img4.jpeg" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="secbox-container">
          <Row>
            <div className="sec-box text-center text-white d-flex justify-content-between align-items-center">
              <Col>
                <div className="p-5">
                  <h4 className="text-lg-start">
                    Writerly is trusted by over 500,000 of the most innovative
                    creators and companies.
                  </h4>
                </div>
              </Col>
              <Col>
                <div>
                  <button
                    type="submit"
                    className="btn btn-dark rounded-pill ps-5 pe-5"
                  >
                    Sign Up
                  </button>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
      <section></section>
    </>
  );
};

export default Home;
