import { data } from './data';
import {useState} from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
const [open, setOpen] = useState([]);

const expandAll = () => {
setOpen(data.map(el => el.id))
}

const collapseAll = () => {
  setOpen([])
}

const showLongDes = (id) => {
  //if open which is an empty arr includes id , filter id that is not equal to el
  if(open.includes(id)) {
    setOpen(open.filter(el => el !== id))
  }else {
    //add id to arr
    setOpen([...open, id])
  }
}
  return (
    <article className="menu">
      <h1>Our Menu</h1>
      <button onClick = {expandAll}>expand</button>
      <button onClick = {collapseAll}>collapse</button>
      {data.map((item) => (
        <MenuItem key={item.id} item={item} onClick={() => showLongDes(item.id)} open={open.includes(item.id)}/>
      ))}
    </article>
  );
};

export default Menu;
