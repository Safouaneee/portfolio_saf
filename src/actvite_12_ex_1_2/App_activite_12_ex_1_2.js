import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./tasksSlice";
import { useState } from "react";

function App_ac_12_ex1() {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Exercice 1 - Tasks</h2>

      <input onChange={e => setText(e.target.value)} />
      <button onClick={() => dispatch(addTask(text))}>Add</button>

      {tasks.map(t => (
        <div key={t.id}>

          {editId === t.id ? (
            <>
              <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
              <button className="btn btn-success m-2" onClick={() => {
                dispatch(updateTask({ id: t.id, text: editText }));
                setEditId(null);
              }}>
                Enregistrer
              </button>
            </>
          ) : (
            <div className="border-1 bg-light w-25 m-3 p-1">
              {t.text}
              <button className="btn btn-primary m-2" onClick={() => {
                setEditId(t.id);
                setEditText(t.text);
              }}>
                Modifier
              </button>
              <button className="btn btn-danger " onClick={() => dispatch(deleteTask(t.id))}>
                Delete
              </button>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default App_ac_12_ex1;
