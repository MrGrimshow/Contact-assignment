import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Contact from "./Contact";

function ContactList(props) {
  return (
    <div>
      {props.contacts.map((contact) => {
        //renders the User component for each user in the users array
        return (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContact={props.deleteContact}
            editContact={props.editContact}
          />
        );
      })}
    </div>
  );
}

export default ContactList;