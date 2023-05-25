import React from "react";

const UpdateTaskForm = ({updateData, changeTask, updateTask, cancelUpdate}) => {
    return (
        <div className="pb-3 form__update-task">
            <div className="mb-3 ps-1 pe-1">
                <div className="col">
                    <input type="text" value={updateData && updateData.title} onChange={(e) => changeTask(e)}
                           className="form-control form-control-lg form__update-task-input"/>
                </div>
            </div>
            <div className="row ps-3 pe-3 form__update-task-buttons">
                <button className="btn btn-lg btn-warning me-4 form__update-task-update-button" onClick={updateTask}>
                    Обновить
                </button>
                <button className="mt-3 btn btn-lg btn-danger form__update-task-cancel-button" onClick={cancelUpdate}>
                    Отменить
                </button>
            </div>
        </div>
    );
}

export default UpdateTaskForm;