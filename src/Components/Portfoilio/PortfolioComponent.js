import React from "react";
import { Container, Row } from "react-bootstrap";
import './portfolioStyles.css'



export default function PortfolioComponent() {
  return (
    <>

      <Container fluid className="portCont">
        <Row>
          <div><h1 className="titleTxt">Welcome!</h1></div>
        </Row>
      </Container>
    </>
  );
}
