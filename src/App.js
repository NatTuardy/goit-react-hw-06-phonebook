import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
// import contactsActions from './redux/contacts/contactsActions';
import SingUpForm from './comoonents/SingUpForm/SingUpForm';
import ContactList from './comoonents/Contact/ContactList';
import Filter from './comoonents/Filter/Filter';
import styles from './App.module.css';
import fadeTransition from './comoonents/Transition/fade.module.css';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.container}>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames={fadeTransition}
          unmountOnExit>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <SingUpForm />
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames={fadeTransition}
          unmountOnExit>
          <h2 className={styles.title}>Contacts</h2>
        </CSSTransition>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames={fadeTransition}
          unmountOnExit>
          <Filter />
        </CSSTransition>
        <ContactList />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items.filter(contact =>
//     contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
//   ),
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = {
//   onDeleteContact: contactsActions.deleteContact,
//   onChangeFilter: contactsActions.changeFilter,
//   getContact: contactsActions.addContact,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
