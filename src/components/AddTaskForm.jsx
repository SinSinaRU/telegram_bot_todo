import React from "react";

const AddTaskForm = ({newTask, setNewTask, addTask}) => {
    return (<div className="pb-3 form__add-task">
        <div className="mb-3 ps-1 pe-1">
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
                   className="form-control form-control-lg form__add-task-input"/>
        </div>
        <div className="row ps-3 pe-3">
            <button className="btn btn-lg btn-success form__add-task-button" onClick={addTask}>
                Добавить
            </button>
        </div>

    </div>);
}

export default AddTaskForm;