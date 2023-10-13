/* eslint-disable react/prop-types */
import "./index.scss";

function List({ items }) {
  return (
    <div className="list-container">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <img src={item.image} alt={`Rick & Morty's ${item.name} image`} />
            <h4>{item.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
