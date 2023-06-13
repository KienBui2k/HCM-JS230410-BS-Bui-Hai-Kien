import React from 'react'
import "../Footer/Footer.css"
import Item from './Item/Item'
export default function Footer({ items, handleDelete }) {
  return (
    
    <div className='Footer__container'>
        <div className='Footer__item'>
            {items.map((item, index) => (
                <Item item={item} index={index} handleDelete={handleDelete}></Item>
            ))}               
        </div>
    </div>
    
  )
}
