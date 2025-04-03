import React from 'react'
import styles from '../styles/form.module.css'

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  };

  return (
    <div className={styles.container}>
      <h1>Products Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Image:
          <input 
            type='text'
            name='image'
            className={styles.image}
            onChange={() => {}}
          />
        </label>
        <label>
          Name:
          <input 
            type='text'
            name='name'
            className={styles.name}
            onChange={() => {}}
          />
        </label>
        <label>
          Price:
          <input 
            type='number'
            name='price'
            className={styles.price}
            onChange={() => {}}
          />
        </label>
        <label>
          Description:
          <input 
            type='text'
            name='description'
            className={styles.description}
            onChange={() => {}}
          />
        </label>
        <label>
          Category:
          <input 
            type='text'
            name='category'
            className={styles.category}
            onChange={() => {}}
          />
        </label>
        <label>
          Discount:
          <input 
            type='number'
            name='discount'
            className={styles.discount}
            onChange={() => {}}
          />
        </label>
        <label>
          Rating:
          <input 
            type='text'
            name='rating'
            className={styles.rating}
            onChange={() => {}}
          />
        </label>
        <label>
          In-Stock:
          <input 
            type='text'
            name='stock'
            className={styles.stock}
            onChange={() => {}}
          />
        </label>
        <label>
          Comments:
          <input 
            type='text'
            name='comments'
            className={styles.comments}
            onChange={() => {}}
          />
        </label>

        <div className={styles.toggler}>
          <p className={styles.toggleText}>Get Newsletter?</p>
          <div className={styles.togglCcontainer}>
            <input className={styles.toggleBtn}/>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form