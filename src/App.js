
import { useState } from 'react';
import './App.css';
import Conten from './Component/Content/Conten';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("listItems")) || []
  );
  const handleAddItem = (newItem) => {
    const addItem = [...items, newItem];
    setItems(addItem);
    localStorage.setItem(("listItems"), JSON.stringify(addItem))
  }
  const handleDelete = (id) => {
    const addItem = items.filter((item) => item.id !== id);
    setItems(addItem);
    localStorage.setItem(("listItems"), JSON.stringify(addItem))
  }
  return (
    <div >
      <Header></Header>
      <Conten handleAddItem={handleAddItem}></Conten>
      <Footer items={items} handleDelete={handleDelete} ></Footer>
    </div>
  );
}

export default App;
