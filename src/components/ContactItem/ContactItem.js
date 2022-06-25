// import s from './ContactItem.module.css';
// import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li key={id}>
    <p>{name}</p>
    <p>{number}</p>
    <button type="button" id={id} onClick={e => onDelete(id)}>
      Delete
    </button>
  </li>
);
export default ContactItem;
