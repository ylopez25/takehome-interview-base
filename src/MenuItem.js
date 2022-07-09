import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { id, name, price, shortDescription } = item;
  return (
    <section className="menuItem">
      <ul>
        <li>id: {id}</li>
        <li>name: {name} </li>
        <li>price: ${price} </li>
        <li>{shortDescription}</li>
      </ul>
    </section>
  );
};

export default MenuItem;
