
// import TodoTask from "./todoTask";
// import Cards from "./cards";
// import Welcome from "./welcome";
// import "./App.css"
// import { useState } from "react";
// import context from "./store/store-context";
// // const tasks=[{name:"Do the coding", time:"till 4pm"},{name:"analog electronics", time:"After 4pm"},{name:"DSA",time:"After dinner"}];
// function App() {
//   let [tasksToShow, taskToState] = useState([]);
//   const addTask = (textToShow, dateToShow) => {
//     const newTask = [...tasksToShow, { name: textToShow, time: dateToShow }];
//     taskToState(newTask);
//   }
//   const deleteElement = (listItem) => {
//     let newItems = tasksToShow.filter(value => value.name !== listItem);
//     taskToState(newItems);
//   }
//   return (
//     <>
//       <context.provider value={{
//         tasksToShow: tasksToShow,
//         addTask: addTask,
//         deleteElement: deleteElement
//       }}>
//         <div>
//           <TodoTask addTask={addTask}></TodoTask>
//           {tasksToShow.length === 0 && <Welcome />}
//           <Cards deleteElement={deleteElement} task={tasksToShow}></Cards>
//         </div>
//       </context.provider>
//     </>
//   )
// }

// export default App;

import TodoTask from "./todoTask";
import Cards from "./cards";
import Welcome from "./welcome";
import "./App.css"
import { useState } from "react";
import YourContext from "./store/store-context";

function App() {
  let [tasksToShow, taskToState] = useState([]);
  
  const addTask = (textToShow, dateToShow) => {
    const newTask = [...tasksToShow, { name: textToShow, time: dateToShow }];
    taskToState(newTask);
  }

  const deleteElement = (listItem) => {
    let newItems = tasksToShow.filter(value => value.name !== listItem);
    taskToState(newItems);
  }

  return (
    <>
      <YourContext.Provider value={{
        tasksToShow: tasksToShow,
        addTask: addTask,
        deleteElement: deleteElement
      }}>
        <div>
          <TodoTask></TodoTask>
          <Welcome />
          <Cards></Cards>
        </div>
      </YourContext.Provider>
    </>
  )
}

export default App;
