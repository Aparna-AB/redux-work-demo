import "./App.css";
import { AddTodo } from "./components/addTodo";
import { DisplayTodo } from "./components/displayTodo";
import { CompletedTodo } from "./components/displayCompletedTodo";

function App() {
  return (
    <>
      <div className="main">
        <AddTodo />

      </div>
      <div className="a1">

        <h2><u>Todo Items</u> <br />
        <span style={{fontSize:"22px"}}> <DisplayTodo /></span> 
          
        </h2>

        <h2 style={{marginLeft:"300px"}}><u>Completed Items</u> <br />
        <span style={{fontSize:"22px"}}> <CompletedTodo /></span>
        
        </h2>
      
      </div>

      {/* <div className="a2">
      </div> */}
    </>

  );
}
export default App;