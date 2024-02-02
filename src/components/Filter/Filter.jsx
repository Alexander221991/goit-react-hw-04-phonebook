import styles from './filter.module.css';

export const Filter = ({ findContact }) => {
  return (
    <label htmlFor="filter" className={styles.label}>
      Find contacts by name
      <input
        type="text"
        id="filter"
        name="filter"
        className={styles.input}
        onInput={findContact}
      />
    </label>
  );
};
