// import UserGreetings from "./UserGreetings";
import List from './list'

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: "sujan" },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "mango", calories: 100 },
  ];
    const meats = [
    { id: 4, name: "Chicken", calories: "human" },
    { id: 5, name: "Lambs", calories: 165 },
    { id: 6, name: "Fish", calories: 180 },
  ];
  return (
    <>
    {fruits.length>0&&
    <List items={fruits} />}
    <List items={meats} category="Meats"/>
     {/* <UserGreetings /> */}
    </>
  );
}



export default App;
