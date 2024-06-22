// import React, { useEffect, useState } from 'react'

const Products = () => {
  // const [ items, setItems ] = useState([]);

  // const displayedItems = useEffect(() => {
  //   fetch('https://dummyjson.com/products/1')
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // }, []);

  // console.log(items);

  return (
    <div className='container'>
      <ul className='list'>
        <li className='items'>
          <img src='' alt='Item' className='item-img'/>
          <h3 className='name'>{}</h3>
          <p className='price'>$ {}</p>
          <p className='category'>{}</p>
          <p className='discount'>{}</p>
          <p className='rating'>{}</p>
          <p className='stock'>{}</p>
          <label className='label'>
            Comments:
            <textarea
              type='text'
              className='comment'
              value=''
              placeholder='Enter comments here...'
              onChange={() => {console.log('changed');}}  
            />
          </label>  
        </li>
      </ul>
    </div>
  )
}

export default Products