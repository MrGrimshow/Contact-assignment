export const addContacts = (newContacts) => {
    return{
        type: "ADD_CONTACT",
        payload: newContacts
    }
}