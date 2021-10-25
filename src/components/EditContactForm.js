import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { editContact } from "../actions/contactActions";

function EditContactForm(props) {
  const [name, setName] = useState(props.contact.name);
  const [phone, setPhone] = useState(props.contact.phone);
  const [location, setLocation] = useState(props.contact.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  function handleSubmit() {
    //combines the new user details
    let editedContact = {
      name: name,
      phone: phone,
      location: location,
      id: props.contact.id,
    };

    //calls the edit User function and closes the modal
    props.editContact(props.contact.id, editedContact);
    props.toggleModal();
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phone</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => handlePhoneChange(e)}
        />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => handleLocationChange(e)}
        />
        <Button onClick={() => handleSubmit()}>Save</Button>
      </Form.Group>
    </Form>
  );
}

const mapDispatchToProps = {
  editContact
}

export default connect(null, mapDispatchToProps)(EditContactForm);