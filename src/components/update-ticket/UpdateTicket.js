import React from 'react'
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label style={{fontWeight: "bold" }}>Reply</Form.Label>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          value={msg}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="mt-3 mb-3 text-right">
          <Button variant="dark" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};

    UpdateTicket.propTypes = {
      handleOnChange: PropTypes.func.isRequired,
      handleOnSubmit: PropTypes.func.isRequired,
      msg: PropTypes.string.isRequired,
    };


export default UpdateTicket
