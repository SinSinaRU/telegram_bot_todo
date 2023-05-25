import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {useState, useEffect} from "react";
import UpdateTaskForm from "./components/UpdateTaskForm";
import AddTaskForm from "./components/AddTaskForm";
import ToDoElement from "./components/ToDoElement";

const tg = window.Telegram.WebApp;

function App() {
    const [toDo, setToDo] = useState(() => JSON.parse(localStorage.getItem('toDos')) || '');
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    useEffect(() => {
        tg.ready();
    });
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDo));
    })
    const addTask = () => {
        if (newTask) {
            let num = 0;
            if (toDo.length !== 0) {
                num = toDo[toDo.length - 1].id + 1;
            } else {
                num = 1;
            }
            let newEntry = {id: num, title: newTask, status: false};
            setToDo([...toDo, newEntry]);

            setNewTask('');
        }
    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id);
        if (updateData && updateData.id === id) {
            setUpdateData('');
        }
        setToDo(newTasks);
    }

    const updateTask = () => {
        let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
        let updatedObject = [...filterRecords, updateData];
        setToDo(updatedObject);
        setUpdateData('');
    }

    const cancelUpdate = () => {
        setUpdateData('');
    }

    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id, title: e.target.value, status: updateData.status
        }
        setUpdateData(newEntry);
    }

    const markDone = (id) => {
        let newTasks = toDo.map(task => {
            if (task.id === id) {
                return ({...task, status: !task.status})
            }
            return task;
        });
        setToDo(newTasks);
    }
    return (<div className="App App-header container-fluid pb-3">

        <div className="form">
            <h1>Список задач</h1>
            {updateData ? <UpdateTaskForm
                updateTask={updateTask}
                changeTask={changeTask}
                cancelUpdate={cancelUpdate}
                updateData={updateData}
            /> : <AddTaskForm
                addTask={addTask}
                setNewTask={setNewTask}
                newTask={newTask}
            />
            }
        </div>
        <div>
            {toDo && toDo.length ? '' : 'Нет задач'}
            {toDo && toDo.sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task) => {
                    return (<React.Fragment>
                        <ToDoElement
                            markDone={markDone}
                            setUpdateData={setUpdateData}
                            task={task}
                            deleteTask={deleteTask}
                        />
                    </React.Fragment>)
                })}
        </div>

    </div>);
}

export default App;
