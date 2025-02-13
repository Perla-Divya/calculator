import React from "react";

const Employee=({id,name,sal,designation})=>{
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{sal}</td>
            <td>{designation}</td>
        </tr>
    )
}
export default Employee