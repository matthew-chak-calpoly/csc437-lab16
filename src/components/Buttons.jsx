import React from "react";

export function ButtonPrimary({ children, onClick }) {
    return (
        <button className="whitespace-nowrap bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={onClick}>{children}</button>
    );
}