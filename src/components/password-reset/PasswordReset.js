import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PasswordReset = ({ handleOnChange, handleOnResetSubmit, frmswitcher, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Enter your email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                required
                onChange={handleOnChange}
                value={email}
              />
            </Form.Group>
            
            <Button type="submit" variant="dark">
              Reset
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="text-dark" href="#!"
          onClick={() => frmswitcher('login')}
          >
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  frmswitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default PasswordReset;
