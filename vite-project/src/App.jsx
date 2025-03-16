// import UserGreetings from "./UserGreetings";
// import List from './list'
//import Button from "./Button";
import MyComponent from "./MyComponent";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import React from "react"
import Counter from "./components/counter";
import Todo from "./components/Todo";

function App() {
  // const fruits = [
  //   { id: 1, name: "apple", calories: "AsminMuji" },
  //   { id: 2, name: "banana", calories: 89 },
  //   { id: 3, name: "mango", calories: 100 },
  // ];
  //   const meats = [
  //   { id: 4, name: "Chicken", calories: 239 },
  //   { id: 5, name: "Lambs", calories: 165 },
  //   { id: 6, name: "Fish", calories: 180 },
  // ];
  // return (
  //   <>
  //   {fruits.length>0&&
  //   <List items={fruits} />}
  //   <List items={meats} category="Meats"/>
  //    {/* <UserGreetings /> */}
  //   </>
  // );
  return (
  //<Button />
  <div>
  <MyComponent/>
  <Paragraph/>
  <List/>
  <Counter/>
  <Todo/>
  </div>
);
}

export default App;
