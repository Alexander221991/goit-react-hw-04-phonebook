import styles from './contact-form.module.css';

import { useState } from 'react';

export const ContactForm = ({ addContact }) => {
  const [dataContact, setDataContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setDataContact({ ...dataContact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ ...dataContact });
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="number" className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          id="number"
          required
          onChange={handleChange}
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
