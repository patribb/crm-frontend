import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";
import tickets from "../../assets/data/dummy-tickets";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";

const ticket = tickets[0];

const Ticket = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
     alert('Form submited!')
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-dark">
          <div className="subject">
            <span style={{ fontWeight: "bold" }}>Subject:</span>{" "}
            {ticket.subject}
          </div>
          <div className="date">
            <span style={{ fontWeight: "bold" }}>Date:</span> {ticket.addedAt}
          </div>
          <div className="status">
            <span style={{ fontWeight: "bold" }}>Status:</span> {ticket.status}
          </div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-dark">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
