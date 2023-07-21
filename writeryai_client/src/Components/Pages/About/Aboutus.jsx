import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './about.css';

const Aboutus = () => {
  return (
    <section className="about_section pb-5">
      <Container className="about_container text-white mb-5">
        <Row>
          <Col>
            <div className="about_content m-auto p-5 mt-4">
              <div className="d-flex m-auto">
                <Image
                  src="/assets/images/aimage.png"
                  alt="ai image"
                  className="about_img"
                />
                <h2>About Us</h2>
              </div>
              <div className="m-auto">
                <h4 className="fw-bold">Our mission</h4>
                <p>
                  Welcome to WriteryAi, the AI-driven scriptwriting software for
                  screenwriters at any level. Our mission is to guide and
                  empower you in crafting captivating screenplays while
                  preserving your unique voice.
                </p>
                <h4 className="fw-bold">What is WriteryAI?</h4>
                <p>
                  WriteryAi is the ultimate AI-driven script writing software
                  that can help screenwriters of all levels. It's designed to
                  guide and assist you in bringing your stories to the
                  screenplay industry format, without stealing your creativity.
                </p>
                <p>
                  {' '}
                  If you're new to the industry, NolanAi can be your co-pilot,
                  helping you through the emotional and exhausting process of
                  screenwriting.
                </p>
                <p>
                  {' '}
                  With its powerful algorithms and intuitive interface, it can
                  offer suggestions and guidance on character development, plot
                  points, and dialogue, helping you turn your ideas into
                  polished screenplays.
                </p>
                <p>
                  {' '}
                  For experienced scriptwriters, WriteryAi can bring new ideas
                  and inspiration to your writing. It can suggest fresh angles,
                  plot twists, and character arcs, helping you take your craft
                  to the next level. And throughout the writing process, you're
                  always in control.{' '}
                  <h5>WriteryAi is here to help, not to take over.</h5>
                </p>
                <h4 className="fw-bold">Control and Creativity:</h4>
                <p>
                  We believe in empowering screenwriters, not taking over. With
                  NolanAi, you're always in control. Our AI-powered features
                  seamlessly integrate into your workflow, providing intelligent
                  suggestions and streamlining your creative process. Our
                  user-friendly interface allows you to effortlessly shape and
                  refine your scripts, bringing your stories to life efficiently
                  and effectively.
                </p>
                <h5 className="fw-bold">
                  Experience the transformative impact of NolanAi and unleash
                  your screenwriting potential today.
                </h5>
                <h5 className="fw-bold">
                  Drop us an email: <a href="/support">hello@writeryai.app</a>
                </h5>
                <h5 className="fw-bold">
                  For support: <a href="/support1">support@nolanai.app</a>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Aboutus;
