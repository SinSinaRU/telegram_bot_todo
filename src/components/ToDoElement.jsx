import React from "react";
import {CheckCircle, Pencil, Trash, XCircle} from "react-bootstrap-icons";

const ToDoElement = ({task, markDone, deleteTask, setUpdateData}) => {
    return (
        <div className="task col mb-3 ms-1 me-1">
            <div className={task.status ? 'task__done' : ''}>
                <span className="task__text">{task.title}</span>
                <div className="task__icons-wrapper">
                    <Trash className='task__icon' onClick={() => deleteTask(task.id)}></Trash>
                    {task.status ? null : <Pencil className='task__icon' onClick={() => {
                        setUpdateData({
                            id: task.id, title: task.title, status: task.status
                        })
                    }}></Pencil>}
                    {task.status ?
                        <XCircle className='task__icon' onClick={() => markDone(task.id)}></XCircle> :
                        <CheckCircle className='task__icon'
                                     onClick={() => markDone(task.id)}></CheckCircle>}
                </div>
            </div>
        </div>
    );
}

export default ToDoElement;