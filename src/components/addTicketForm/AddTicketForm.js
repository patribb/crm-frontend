import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./styles.css";
import PropTypes from 'prop-types';


const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
    console.log(frmDt);
  return (
    <div className="mt-3 jumbotron add-new-ticket bg-light">
      <h1 className="text-center text-dark">Add New Ticket</h1>
      <hr />

      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              // minLength="3"
              maxLength="100"
              value={frmDt.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "SUbject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
           Issue Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmDt.detail}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button type="submit" variant="dark" block onSubmit={handleOnSubmit}>
          Open Ticket
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
handleOnSubmit: PropTypes.func.isRequired,   
handleOnChange: PropTypes.func.isRequired,
frmDt: PropTypes.object.isRequired,
frmDataError: PropTypes.object.isRequired,
};

export default AddTicketForm;
