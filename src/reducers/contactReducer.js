const initialState = {
    contacts: [],
  };
  
  const contactReducer = (state = initialState, action) => {
    switch(action.type) {
      case "ADD_CONTACT":
        return{...state.contacts, contacts: [...state.contacts, action.payload] };

      case "DELETE_CONTACT":
      const filteredContacts = state.contacts.filter((contact) => contact.id !==action.payload);
      return{...state, contacts: filteredContacts};

      case "EDIT_CONTACT":
        const updatedContacts = state.contacts.map((contact) => {
          if (contact.id === action.payload.contactId) {
            return action.payload.updatedContact
          }
          return contact;
        })
        return{...state, contacts: updatedContacts}

        default:
          return state;
    }
  };
  

  export default contactReducer;