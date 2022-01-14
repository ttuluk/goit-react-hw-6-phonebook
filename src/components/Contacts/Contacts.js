import React from "react";
import styles from "./Contacts.module.css";
import { connect } from 'react-redux';
import contactActions from "../../redux/contact-actions";

const Contacts = ({ contactNames, onDeleteContact }) => {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.contacts_list}>
        {contactNames.map((elem) => {
          return (
            <li key={elem.id} className={styles.contacts_item}>
              {elem.name}: {elem.number}
              <button
                className={styles.btn_delete}
                type="button"
                onClick={() => onDeleteContact(elem.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

 const getFilterContact = (allContacts, filterName) => {
    const normalizedFilter = filterName.toLowerCase();
    return allContacts.filter((contact) => {
      return contact.name.includes(normalizedFilter);
    });
  };

const mapStateToProps = (state) => {
  const { contacts, filter } = state.contact;

  if( filter !== "")
  { return { contactNames: getFilterContact(contacts, filter) } }
  return {contactNames: state.contact.contacts}
};

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(contactActions.addContact(text)),
  onDeleteContact: id=> dispatch(contactActions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

