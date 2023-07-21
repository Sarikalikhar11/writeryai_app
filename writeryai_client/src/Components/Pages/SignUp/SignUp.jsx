import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// const REGISTER_URL = '/register';

const SignUp = () => {
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const { name, email, phone, password, confirmPassword } = user;
    if (name && email && phone && password && password === confirmPassword) {
      // alert('posted');
      await axios
        .post('http://localhost:5000/signup', user)
        .then((res) => console.log(res));
      // notifyB();
      // navigate('/login');
    } else {
      alert('invalid input');
    }
  };

  return (
    <>
      <section className="signup_section m-5">
        <Container>
          <Row>
            <Col>
              <div className="signup_sec m-auto w-50">
                <h1 className="text-center">Sign Up</h1>
                <p className="text-center">
                  Sign Up to unlock the full Nolan Experience.
                </p>
                <div className="signup_form">
                  <Form encType="multipart/form-data">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Enter Name..."
                        value={user.name}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email..."
                        value={user.email}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="phone"
                        type="number"
                        placeholder="Phone..."
                        value={user.phone}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password..."
                        value={user.password}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password..."
                        value={user.confirmPassword}
                        required
                      />
                    </Form.Group>
                    <p>
                      Already have an account |{' '}
                      <Link to="/login">Login here</Link>
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

export default SignUp;
