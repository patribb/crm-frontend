import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticketTable/TicketTable";
import tickets from "../../assets/data/dummy-tickets"
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";

const Dashboard = () => {
  return (
    <Container>
    <Row>
      <Col>
        <PageBreadcrumb page="Dashboard" />
      </Col>
    </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="dark"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            ➕Add new Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          className="text-center mb-2"
          style={{ color: "#343a40", fontWeight: "bold" }}
        >
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col
          className="text-center mb-2"
          style={{ color: "#343a40", fontWeight: "bold" }}
        >
          <div>Recently added tickets</div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col
          className="recent-ticket text-center mb-2"
          style={{ color: "#343a40", fontWeight: "bold" }}
        >
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
