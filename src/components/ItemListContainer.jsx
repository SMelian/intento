function ItemListContainer(props) {
  console.log(props.state);
  return (
    <div className="item-list-container">
      {props.state.map((item) => {
        return (
          <article key={item.id} className="card"> {/* Asigna una key única, como item.id */}
            <h2 className="card__title">{item.flavor}</h2>
            <img className="card__image" src={item.picture} alt={item.title} />
            <p>${item.price}</p>
            <button className="btnCard">ver mas</button>
          </article>
        );
      })}
    </div>
  );
}

export default ItemListContainer;
