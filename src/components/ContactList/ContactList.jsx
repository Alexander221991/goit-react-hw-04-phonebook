import styles from './contact-list.module.css';
import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ filteredContact, deleteContact }) => {
  return (
    <ul className={styles.contact_list}>
      {filteredContact.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
