import styles from './contact-item.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={styles.btn}
      >
        Delete
      </button>
    </li>
  );
};
