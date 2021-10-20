import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditContactForm";

function Contact(props) {
  const contact = props.contact;

  //state to handle modal
  const [showModal, setShowModal] = useState(false);

  //function to toggle modal
  function toggleModal() {
    //sets the showModal state the opposite of what
    //it currently is
    setShowModal(!showModal);
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <h3>{contact.phone}</h3>
      <h4>{contact.location}</h4>
      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteContact(contact.id)}>
        Delete
      </Button>

      {/*Modal to edit user*/}
      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Component to edit user*/}
          <EditUserForm
            contact={contact}
            editContact={props.editContact}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;