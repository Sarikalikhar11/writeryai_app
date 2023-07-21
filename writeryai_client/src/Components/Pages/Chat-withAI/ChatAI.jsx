import React, { useState } from 'react';
import './chatai.css';
import axios from 'axios';
import { Button, Container, Form, Image } from 'react-bootstrap';

const ChatAI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('http://localhost:5000/chat', { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="about_section pb-5">
        <Container className="wrapper w-75">
          <h3 className="text-center pt-5">AI Chat here...</h3>
          <Image
            src="/assets/images/app-logo.png"
            alt=""
            className="app-logo"
          />
          <Form class="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="name">
              <Image
                src="/assets/images/chatGPT.png"
                alt=""
                className={loading ? 'cg-logo loading' : 'cg-logo'}
              />
              <Form.Control
                className="form_input"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask anything... :)"
                required
              />
              <Button type="submit">Ask</Button>
            </Form.Group>
          </Form>
          <p className="response-area">{loading ? 'loading...' : response}</p>
        </Container>
      </section>
    </>
  );
};

export default ChatAI;
