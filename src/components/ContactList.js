import Contact from "./Contact";
import {connect} from "react-redux";

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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    contacts: state.contacts.contacts
  }
}

export default connect(mapStateToProps) (ContactList);