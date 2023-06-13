// import React, { useState } from 'react'
// import "../Content/Conten.css"

// let idItem= 0
 
// export default function Conten({ handleAddItem }) {
//   const [item, setItem] = useState('')
//   const addItem = () => {
//     if(item ===""){
//       return;
     
//     }
//     handleAddItem({ id: idItem++, content: item });
//     setItem(''); 
//   };
//   return (
//     <div className='content__container'>
//           <div className='content__item'>
//               <label htmlFor="input_text"> Title   <br></br> 
//                     <input value={item} type="text" id='input_text' placeholder='Enter text' onChange={(e) => setItem(e.target.value)}/>
//                 </label>
//                <button onClick={addItem} ><i class="fa-solid fa-plus"></i> </button> 
//         </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import "../Content/Conten.css";

let idItem = 0;

export default function Conten({ handleAddItem }) {
  const [item, setItem] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addItem = () => {
    if (item === '') {
      setErrorMessage('bạn chưa nhập gì cả');
      return;
    }

    handleAddItem({ id: idItem++, content: item });
    setItem('');
    setErrorMessage('');
  };

  useEffect(() => {
    if (errorMessage !== '') {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  return (
    <div className='content__container'>
      <div className='content__item'>
        <label htmlFor="input_text"> Title   <br></br>
          <input value={item} type="text" id='input_text' placeholder='Enter text' onChange={(e) => setItem(e.target.value)} />
        </label>
        <button onClick={addItem}><i class="fa-solid fa-plus"></i> </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

