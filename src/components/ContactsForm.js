import React, { useState } from "react";
//package to generate unique id
import { v4 as uuid } from "uuid";

function ContactsForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] =useState("");

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

      props.handleAddContact(newContact);

      setName("");
      setPhone("");
      setLocation("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
}

export default ContactsForm;