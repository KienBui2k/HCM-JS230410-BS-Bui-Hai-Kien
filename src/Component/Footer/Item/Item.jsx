import React from 'react'
import "../Item/Item.css"
export default function Item({ item, index, handleDelete }) {
  console.log("🚀 ~ file: Item.jsx:4 ~ Item ~ item:", item)
  return (
    <div className='item__content' key={index}>
        <p>{item.content}</p>
      <button onClick={() =>  handleDelete(item.id)}> <i class="fa-solid fa-xmark"></i> </button>
    </div>
  )
}
