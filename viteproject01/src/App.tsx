import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
function App() {
  return (
    <div>
      <Like onClick={() => console.log("chicked")} />
    </div>
  );
}
export default App;

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleSelctItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelctItem}
//       />
//     </div>
//   );
// }

// export default App;
