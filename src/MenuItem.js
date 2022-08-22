import './MenuItem.css';

const MenuItem = ({ item, onClick, open }) => {
  const { id, name, price, shortDescription, longDescription} = item;
  return (
    <section className="menuItem">
      <ul>
        <li>id: {id}</li>
        <li>name: {name} </li>
        <li>price: ${price} </li>
        <li>{shortDescription}</li>
        <button onClick={onClick}>
          <i>{open ? "Show less" : "Show more"}</i>
        </button>
        <li>{open ? longDescription : null}</li>
      </ul>
    </section>
  );
};

export default MenuItem;
