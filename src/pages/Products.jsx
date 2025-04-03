// import React, { useEffect, useState } from 'react'
import styles from "../styles/products.module.css"

const Products = () => {
  // const [ items, setItems ] = useState([]);

  // const displayedItems = useEffect(() => {
  //   fetch('https://dummyjson.com/products/1')
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // }, []);

  // console.log(items);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.items}>
          <img src='' alt='Item' className={styles.itemImg}/>
          <h3 className={styles.name}>{}</h3>
          <p className={styles.price}>$ {}</p>
          <p className={styles.category}>{}</p>
          <p className={styles.discount}>{}</p>
          <p className={styles.rating}>{}</p>
          <p className={styles.stock}>{}</p>
          <label className={styles.label}>
            Comments:
            <textarea
              type='text'
              className={styles.comment}
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