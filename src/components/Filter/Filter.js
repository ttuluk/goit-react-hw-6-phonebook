import React from "react";
import styles from "../Form/Form.module.css";
import { connect } from 'react-redux';
import contactActions from "../../redux/contact-actions";

const Filter = ({ nameFilter, onChangeFilter }) => {
  return (
    <>
      <h3 className={styles.title}>Find contacts by name</h3>
      <label className={styles.label}>
        <input
          type="text"
          className={styles.input}
          name="filter"
          value={nameFilter}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
 nameFilter: state.contact.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(contactActions.changeFilter(e.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);

