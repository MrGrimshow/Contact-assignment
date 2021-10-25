export const addContacts = (newContacts) => {
    return{
        type: "ADD_CONTACT",
        payload: newContacts
    }
}

export const deleteContact = (contactId) => {
    return {
      type: "DELETE_CONTACT",
      payload: contactId,
    };
};

export const editContact = (contactId, updatedContact) => {
    return {
      type: "EDIT_CONTACT",
      payload: {contactId, updatedContact},
    };
  };