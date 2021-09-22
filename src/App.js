import React, { useState } from "react";
import UserForm from "./components/ContactsForm";
import UserList from "./components/ContactList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [contacts, setContacts] = useState([]);

  function handleAddContact(contact) {
    setContacts([...contacts, contact]);
  }

  //function to edit user
  function editContact(newDetails, contactId) {
    //maps through the users array and updates
    //the user with the same user id
    const u = contacts.map((contact) => {
      if (contactId === contact.id) {
        return newDetails;
      } else {
        return contact;
      }
    });

    //updates the users state to contain the edited user
    setContacts(u);
  }

  //funtion to delete a user
  function deleteContact(contactId) {
    //loops through the users state and removes the user with the same id
    const filteredContacts = contacts.filter((contact) => {
      return contactId !== contact.id;
    });

    //sets the users state to the filtered users array
    setContacts(filteredContacts);
  }

  return (
    <div>
      <UserForm handleAddContact={handleAddContact} />
      <UserList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    </div>
  );
}

export default App;