import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ id, name, isComplete, onToggleComplete, onDelete }) {
    return (
        <li className="flex flex-row space-x-10">
            <label>
                <input type="checkbox" checked={isComplete} onChange={() => onToggleComplete(id)}/> {name}
            </label>
            <button onClick={() => onDelete(id)}><FontAwesomeIcon icon={faTrash} className="text-gray-500"/></button>
        </li>
    );
}