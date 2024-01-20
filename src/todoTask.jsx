import { useState,useRef } from "react";
import { useContext } from "react";
import YourContext from "./store/store-context"; 
function TodoTask(){
  let nameInput=useRef();
  let dateInput=useRef();
  let firstContext=useContext(YourContext);
  let {addTask}= firstContext;
  // let addTaskContext=useContext(newStateContext);
//   let [textToShow, textToState] = useState("");
//   let [dateToShow, dateToState] = useState("");

//   const textInput = (event) => {
//     textToShow = event.target.value;
//     textToState(textToShow);
//   }
//   const dateInput = (event) => {
//     dateToShow = event.target.value;
//     dateToState(dateToShow);
//   }
  const addButtonClicked = () => {
    const task=nameInput.current.value;
    const dateTask=dateInput.current.value;
    if((task && dateTask!="")){
      addTask(task, dateTask);
    }
    nameInput.current.value="";
    dateInput.current.value="";
    // textToState("");
    // dateToState("");
  }
  return (
    <div>
      <h1 className="heading">Todo List</h1>
      <div className="container text-center kgf">
        <div className="row ">
          <div className="col-6">
            <input type="text"
              placeholder="Enter your task"
              className="name"
              
              ref={nameInput}
            />
          </div>
          <div className="col-4">
            <input type="time" className="time"
             
              ref={dateInput}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success"
              onClick={addButtonClicked}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoTask;