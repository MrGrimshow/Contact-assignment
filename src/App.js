import React, { useState, useEffect } from "react";
import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
import {getAllContacts} from "./actions/contactActions"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import {BrowserRouter, Route} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}
// function App(props) {
//   const [contacts, setContacts] = useState([]);
//   useEffect(()=>{
//     props.getAllContacts();
//   },[]);

//   function handleAddContact(contact) {
//     setContacts([...contacts, contact]);
//   }

//   //function to edit user
//   function editContact(newDetails, contactId) {
//     //maps through the users array and updates
//     //the user with the same user id
//     const u = contacts.map((contact) => {
//       if (contactId === contact.id) {
//         return newDetails;
//       } else {
//         return contact;
//       }
//     });

//     //updates the users state to contain the edited user
//     setContacts(u);
//   }

//   //funtion to delete a user
//   function deleteContact(contactId) {
//     //loops through the users state and removes the user with the same id
//     const filteredContacts = contacts.filter((contact) => {
//       return contactId !== contact.id;
//     });

//     //sets the users state to the filtered users array
//     setContacts(filteredContacts);
//   }

//   return (
//     <div>
//       <UserForm  />
//       <UserList  deleteContact={deleteContact} editContact={editContact} />
//     </div>
//   );
// }

const mapDispatchToProps = {
	getAllContacts
};

export default connect(null, mapDispatchToProps)(App);