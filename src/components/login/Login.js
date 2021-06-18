import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = ({ handleOnChange, handleOnSubmit, frmswitcher, email, password }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                required
                onChange={handleOnChange}
                value={email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                onChange={handleOnChange}
                value={password}
                required
              />
            </Form.Group>
            <Button type="submit" variant="dark">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="text-dark" href="#!"
          onClick={() => frmswitcher('reset')}
          >
            Forget password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmswitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
