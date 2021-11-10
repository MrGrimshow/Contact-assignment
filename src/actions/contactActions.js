export const addContacts = (newContacts) => {
    //returns the type of action and data to send to the store
    return (dispatch, state, { getFirestore }) => {
      getFirestore()
      .collection("contacts")
      .add(newContacts)
      .then(
        () => {},
        () => {}
      )
        // type: "ADD_CONTACT",
        // payload: newContacts
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

  export const getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
      getFirestore()
        .collection("contacts")
        .onSnapshot(
          (snapshot) => {
            let contacts = [];
            console.log(snapshot);
            snapshot.forEach((doc) => {
              contacts.push(doc.data());
            });
            console.log(contacts);
            dispatch({ type: "SET_ALL_CONTACTS", payload: contacts });
          },
          (error) => {
            console.log(error);
          }
        );
      };
    };