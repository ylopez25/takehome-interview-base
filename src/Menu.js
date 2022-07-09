import { data } from './data';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <article className="menu">
      <h1>Our Menu</h1>
      {data.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </article>
  );
};

export default Menu;
