import { emp_data } from "./emp_data";
import Employee from "./Employee";

const Employees=()=>{
    return(
        <table border={5} cellPadding={10}>
            <thead>
                   <tr>
                         <th>ID</th>
                         <th>NAME</th>
                         <th>SAL</th>
                         <th>DESIGNATION</th>
                   </tr>
            </thead>
            <tbody>
                    {emp_data.map(({id,name,sal,designation})=>{
                         return <Employee id={id} name={name} sal={sal} designation={designation}/>
                  })
                }
            </tbody>

        </table>
    )
}
export default Employees