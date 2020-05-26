import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ contacts, value, onChangeFilter }) =>
  contacts.length >= 2 && (
    <>
      <h3 className={styles.tittle}>Find contact by name:</h3>,
      <input
        className={styles.inputt}
        type="search"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Find name"
      />
    </>
  );

const mapStateToProps = state => ({
  value: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
};
