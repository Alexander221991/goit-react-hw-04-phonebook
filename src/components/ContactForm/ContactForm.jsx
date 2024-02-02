import styles from './contact-form.module.css';

import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact({
      ...this.state,
    });
    e.target.reset();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            required
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
