import React, {useState} from "react";
import { ButtonPrimary } from "./Buttons";

export default function AddTaskForm({ onNewTask }) {
    const [taskName, setTaskName] = useState("");

    function onNew() {
        onNewTask(taskName);
        setTaskName("");
    }

    return (
        <div className="flex flex-row w-full space-x-2">
            <input className="border border-gray-300 rounded px-2 py-1 w-full" placeholder="New task name" aria-label="New task name" value={taskName} onChange={e => setTaskName(e.target.value)} />
            <ButtonPrimary onClick={onNew}>Add Task</ButtonPrimary>
        </div>
    );
}