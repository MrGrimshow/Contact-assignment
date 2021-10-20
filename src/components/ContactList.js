import Contact from "./Contact";
import {connect} from "react-redux";

function ContactList(props) {
  return (
    <>
      {props.contactsData.map((contact) => {
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    contactsData: state.contacts
  }
}

export default connect(mapStateToProps) (ContactList);