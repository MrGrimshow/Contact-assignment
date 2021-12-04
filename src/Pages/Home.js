import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsForm from "../components/ContactsForm";
import { Container, Row, Col } from "react-bootstrap";
import ContactList from "../components/ContactList";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";

function Home(props) {
    return (
    <div>
        <Container fluid style={{ marginTop: "5 rem" }}>
      <Row>
        <button onClick={() => props.signOut()}>Sign out</button>
        <Col md="5">
          <ContactsForm />
        </Col>

        <Col md="5 ">
          <ContactList />
        </Col>
      </Row>
    </Container>
    </div>
    )
}

const mapDispatchToProps = {
    signOut,
  };
  
  export default connect(null, mapDispatchToProps)(Home);