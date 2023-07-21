import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { email, password } = user;
    if (email && password) {
      axios
        .post('http://localhost:5000/login', user)
        .then((res) => console.log(res));
    } else {
      alert('invalid input');
    }
  };

  return (
    <>
      <section className="login_section about_section p-5">
        <Container>
          <Row>
            <Col>
              <div className="login_sec m-auto w-50">
                <h1 className="text-center">Login</h1>
                <p className="text-center">
                  Sign In to unlock the full Nolan Experience.
                </p>
                <div className="signup_form">
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="email"
                        type="email"
                        value={user.email}
                        placeholder="Enter email..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="password"
                        type="password"
                        value={user.password}
                        placeholder="Password..."
                      />
                    </Form.Group>
                    <p>
                      Don't have an account | <Link to="/signup">Sign Up</Link>
                    </p>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleClick}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
