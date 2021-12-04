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
  return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("contacts")
			.doc(contactId)
			.delete()
			.then(() => {});
	};
    // return {
    //   type: "DELETE_CONTACT",
    //   payload: contactId,
    // };
};

export const editContact = (contactId, updatedContact) => {
  return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("contact")
			.doc(contactId)
			.update(updatedContact)
			.then(() => {});
	};
    // return {
    //   type: "EDIT_CONTACT",
    //   payload: {contactId, updatedContact},
    // };
  };

  export const getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
      getFirestore()
        .collection("contacts")
        .orderBy("timestamp", "desc")
        .onSnapshot(
          (snapshot) => {
            let contacts = [];
            snapshot.forEach((doc) => {
              contacts.push({ ...doc.data(), id: doc.id });
            });
            console.log(contacts);
            dispatch({ type: "SET_ALL_CONTACTS", payload: contacts });
          },
          (error) => {}
        );
      };
    };