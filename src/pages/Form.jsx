import React from 'react'
import '../styles/form.css'

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  };

  return (
    <div className='container'>
      <h1>Products Form</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Image:
          <input 
            type='text'
            name='image'
            className='image'
            onChange={() => {}}
          />
        </label>
        <label>
          Name:
          <input 
            type='text'
            name='name'
            className='name'
            onChange={() => {}}
          />
        </label>
        <label>
          Price:
          <input 
            type='number'
            name='price'
            className='price'
            onChange={() => {}}
          />
        </label>
        <label>
          Description:
          <input 
            type='text'
            name='description'
            className='description'
            onChange={() => {}}
          />
        </label>
        <label>
          Category:
          <input 
            type='text'
            name='category'
            className='category'
            onChange={() => {}}
          />
        </label>
        <label>
          Discount:
          <input 
            type='number'
            name='discount'
            className='discount'
            onChange={() => {}}
          />
        </label>
        <label>
          Rating:
          <input 
            type='text'
            name='rating'
            className='rating'
            onChange={() => {}}
          />
        </label>
        <label>
          In-Stock:
          <input 
            type='text'
            name='stock'
            className='stock'
            onChange={() => {}}
          />
        </label>
        <label>
          Comments:
          <input 
            type='text'
            name='comments'
            className='comments'
            onChange={() => {}}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form