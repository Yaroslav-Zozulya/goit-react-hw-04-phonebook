// import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

const ContactList = ({ filterContacts, onClickDelete }) => {
  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onClickDelete}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
