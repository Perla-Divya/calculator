import React from "react";
import { useDrag } from "react-dnd";

const DraggableButton = ({ label }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "button",
        item: { label },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <button
            ref={drag}
            className={`p-2 m-1 bg-gray-800 text-white rounded ${isDragging ? "opacity-50" : ""}`}
        >
            {label}
        </button>
    );
};

export default DraggableButton;

