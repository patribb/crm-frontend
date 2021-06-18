import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { LinkContainer } from "react-router-bootstrap";

const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
