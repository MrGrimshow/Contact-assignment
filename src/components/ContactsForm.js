import React, { useState } from "react";
//package to generate unique id
import { v4 as uuid } from "uuid";
import { Form, Button } from "react-bootstrap";
import {addContacts} from "../actions/contactActions";
import{connect} from "react-redux";

function ContactsForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (phone && name && location) {
      let newContact = {
        name: name,
        phone: phone,
        location: location,
        //adds a unique id to the new user
        id: uuid(),
      };

      props.addNewContact(newContact);

      setName("");
      setPhone("");
      setLocation("");
    }
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label>Location</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <Button>
        {" "}
        <input type="submit" />
      </Button>
    </Form>
  );
}

const mapDispatchToProps = {
  addNewContact: addContacts
};

export default connect(null, mapDispatchToProps) (ContactsForm);
