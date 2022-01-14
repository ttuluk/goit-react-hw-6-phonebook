import React, { Component } from "react";
import shortid from "shortid";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import styles from "./Form.module.css";
import { connect } from 'react-redux';
import contactActions from "../../redux/contact-actions";

class Form extends Component {
  state = {
    name: "",
    phoneNumber: "",
  };
  
  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleInputContactChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState(() => {
      return { [name]: value };
    });
  };

  handleInputPhoneChange = (event) => {
    const { value } = event.currentTarget;

    this.setState(() => {
      return { phoneNumber: value };
    });
  };

  handleSubmite = (e) => {
    e.preventDefault();
    const { name, phoneNumber } = this.state;
    this.props.onSubmit(name, phoneNumber);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", phoneNumber: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmite} className={styles.form}>
          <label htmlFor={this.nameInputId} className={styles.label}>
            Name
            <input
              id={this.nameInputId}
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              value={this.state.name}
              onChange={this.handleInputContactChange}
              required
            />
          </label>
          <label htmlFor={this.phoneInputId} className={styles.label}>
            Number
            <input
              id={this.phoneInputId}
              className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              value={this.state.phoneNumber}
              onChange={this.handleInputPhoneChange}
              required
            />
          </label>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
        <Filter />
        <Contacts />
      </>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (text, phoneNumber) => dispatch(contactActions.addContact(text, phoneNumber)),
});

export default connect(null, mapDispatchToProps)(Form);
