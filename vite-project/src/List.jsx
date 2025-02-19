function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "mango", calories: 100 },
  ];
  const listItems = fruits.map((fruits) => (
    <li key={fruits.id}>
      {" "}
      {fruits.name}: &nbsp;{fruits.calories}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
export default List;
