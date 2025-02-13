// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import { create } from "zustand";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import DraggableButton from "./DraggableButton.js";
// import { evaluate } from "mathjs"; // Safer alternative to eval()

// // Zustand Store change the number color css black border with black number
// const useCalculatorStore = create((set) => ({
//     components: [],
//     addComponent: (component) =>
//         set((state) => ({ components: [...state.components, component] })),
//     removeComponent: (index) =>
//         set((state) => ({
//             components: state.components.filter((_, i) => i !== index),
//         })),
// }));

// const CalculatorBuilder = () => {
//     const { components, addComponent, removeComponent } = useCalculatorStore();
//     const [expression, setExpression] = useState("");
//     const [result, setResult] = useState(null);
//     const [total, setTotal] = useState(0); // New state for total

//     const [{ isOver }, drop] = useDrop({
//         accept: "button",
//         drop: (item) => addComponent(item.label), // Ensure "=" can be dropped
//         collect: (monitor) => ({ isOver: !!monitor.isOver() }),
//     });

//     const handleClick = (value) => {
//         if (value === "=") {
//             try {
//                 const evaluated = evaluate(expression); // Using mathjs for safer evaluation
//                 setResult(evaluated);
//                 setTotal((prevTotal) => prevTotal + Number(evaluated)); // Updating total safely
//             } catch {
//                 setResult("Error");
//             }
//         } else if (value === "C") {
//             setExpression("");
//             setResult(null);
//             setTotal(0); // Reset total when clearing
//         } else {
//             setExpression((prev) => prev + value);
//         }
//     };

//     return (
//         <DndProvider backend={HTML5Backend}>
//             <div className="p-5 flex flex-col items-center">
//                 <h2 className="text-xl font-bold mb-4">Drag & Drop Calculator</h2>

//                 {/* Display Section */}
//                 <div className="border rounded p-4 w-80 bg-gray-100">
//                     <div className="border p-2 mb-2 bg-white text-lg font-semibold">
//                         {expression || result || "0"}
//                     </div>
//                     <h3 className="text-lg font-bold mt-2">Total: {total}</h3> {/* Displaying Total */}

//                     {/* Droppable Area */}
//                     <div
//                         ref={drop}
//                         className={`min-h-[100px] p-2 border ${
//                             isOver ? "bg-green-200" : "bg-white"
//                         }`}
//                     >
//                         {components.map((comp, index) => (
//                             <button
//                                 key={index}
//                                 className="m-1 p-2 bg-blue-500 text-black border border-black rounded" // Updated styles for black text and border
//                                 onClick={() => handleClick(comp)}
//                             >
//                                 {comp}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Draggable Buttons */}
//                 <div className="grid grid-cols-4 gap-2 mt-4">
//                     {[...Array(10).keys(), "+", "-", "*", "/", "=", "C"].map((value) => (
//                         <DraggableButton key={value} label={value.toString()} />
//                     ))}
//                 </div>
//             </div>
//         </DndProvider>
//     );
// };

// export default CalculatorBuilder;


import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { create } from "zustand";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableButton from "./DraggableButton.js";
import { evaluate } from "mathjs";
import "../index.css"; // Linking CSS+

const useCalculatorStore = create((set) => ({
    components: [],
    addComponent: (component) =>
        set((state) => ({ components: [...state.components, component] })),
    removeComponent: (index) =>
        set((state) => ({
            components: state.components.filter((_, i) => i !== index),
        })),
}));

const CalculatorBuilder = () => {
    const { components, addComponent, removeComponent } = useCalculatorStore();
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState(null);
    const [total, setTotal] = useState(0);

    const [{ isOver }, drop] = useDrop({
        accept: "button",
        drop: (item) => addComponent(item.label),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    const handleClick = (value) => {
        if (value === "=") {
            try {
                const evaluated = evaluate(expression);
                setResult(evaluated);
                setTotal((prevTotal) => prevTotal + Number(evaluated));
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setExpression("");
            setResult(null);
            setTotal(0);
        } else {
            setExpression((prev) => prev + value);
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="calculator-container">
                <h2 className="title">Drag & Drop Calculator</h2>
                <div className="display-container">
                    <div className="expression-display">{expression || result || "0"}</div>
                    <h3 className="total-display">Total: {total}</h3>
                    <div ref={drop} className={`drop-zone ${isOver ? "hover" : ""}`}>
                        {components.map((comp, index) => (
                            <button
                                key={index}
                                className="calc-button"
                                onClick={() => handleClick(comp)}
                            >
                                {comp}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="button-grid">
                    {[...Array(10).keys(), "+", "-", "*", "/", "=", "C"].map((value) => (
                        <DraggableButton key={value} label={value.toString()} />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default CalculatorBuilder;