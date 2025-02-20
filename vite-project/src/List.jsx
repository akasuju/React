import PropTypes from "prop-types";
function List(props) {
  const itemList = props.items;
  const category = props.category;

  // fruits.sort((a ,b)=>a.name.localeCompare(b.name));
  // fruits.sort((a ,b)=>a.calories - b.calories);

  // const lowCalfruits= fruits.filter(fruit=>fruit.calories<100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;{item.calories}
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ),
};


List.defaultProps = {
    category: "Category",
    items: []
};
export default List;
