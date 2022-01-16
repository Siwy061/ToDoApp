import React, { useState, useEffect } from "react";
import Form from "./FormToDoComponent/Form";
import TaskToDo from "./TaskToDoComponent/TaskToDo";
import styles from "./App.module.css";
import FinishedTasks from "./FinishedTasks/FinishedTasks";
import Time from "./Time.js/Time";

function App() {
  const [List, SetList] = useState([]);
  const [counter, setcounter] = useState(List.length);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const handleRemove = (id) => {
    SetList(List.filter((item) => item.id !== id));
    setcounter(counter - 1);
  };
  const handleAdd = (ToDo) => {
    SetList([...List, ToDo]);
  };
  const handleFinishTask = (id) => {
    if (List[id].id == id) {
      setFinishedTasks([...finishedTasks, List[id]]);
      SetList(List.filter((item) => item.id !== id));
      setcounter(counter - 1);
    } else {
      console.log(id);
    }
  };
  const setUpdate = (newName, id) => {
    SetList(
      List.map((item) => {
        if (item.id === id) {
          item.name = newName;
        }
        return item;
      })
    );
  };
  return (
    <React.Fragment>
      <div className={styles.Wrapper}>
        <div className={styles.AddForm}>
          <div className="Form">
            <Form
              setcounter={setcounter}
              counter={counter}
              Add={handleAdd}
              List={List}
            ></Form>
          </div>
        </div>
        <Time />
        <ul className={styles.List}>
          {List.length == 0
            ? "nothing to do, add something ! "
            : List.map((element) => (
                <TaskToDo
                  index={element.id}
                  name={element.name}
                  date={element.date}
                  handleRemove={handleRemove}
                  handleFinishTask={handleFinishTask}
                  key={element.id}
                  List={List}
                  setUpdate={setUpdate}
                />
              ))}
        </ul>
      </div>
      <ul>
        <FinishedTasks
          finishedTasks={finishedTasks}
          setFinishedTasks={setFinishedTasks}
        />
      </ul>
    </React.Fragment>
  );
}

export default App;
