import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import './pricing.css';
import Toggle from '../../ToggleSwitch/Toggle';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <section className="about_section">
        <Container className="w-75 pt-5">
          <Row className="m-auto">
            <div className="text-center pb-3">
              <h1>Simple Pricing</h1>
            </div>
            <div className="text-center pb-5">
              <h3>No Complicated pricing system</h3>
            </div>
            <div className="d-flex">
              <Col>
                <Card style={{ width: '30rem' }}>
                  <Card.Body>
                    <Card.Title className="text-center fw-bold fs-2 mt-2">
                      Free
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-purple">
                      30 Credits
                    </Card.Subtitle>
                    <Card.Text className="text-center">
                      Simple system: 1 credit = 1 AI feature use (for most
                      tools).
                    </Card.Text>
                    <Card.Text className="text-center">
                      Article Generator consumes 3 credits.
                    </Card.Text>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Access to all features and products
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Limited AI feature usage
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Unlimited drafts
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Unlimited editing
                    </p>
                    <Button className="btn-pricing">
                      <Link to="/login">Start for free</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '30rem' }}>
                  <Card.Body>
                    <Card.Title className="text-center mt-2">
                      {/* <MdToggleOn size={60} /> */}
                      <Toggle
                        isOn={value}
                        onColor="#EF476F"
                        handleToggle={() => setValue(!value)}
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-purple text-center mt-4">
                      <span>USD$8/month </span>for EVERYTHING
                    </Card.Subtitle>
                    <p className="mt-4">
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Access to all features and products
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Unlimited AI feature usage
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Unlimited drafts
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Unlimited editing
                    </p>
                    <p>
                      <BiSolidBadgeCheck style={{ color: '#2ecb71' }} />
                      &nbsp; Cancel at any time
                    </p>
                    <Button className="btn-pricing">
                      <Link to="/login">Start writing</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
