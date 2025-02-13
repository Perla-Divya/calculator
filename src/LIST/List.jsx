import ListItem from "./ListItem";
let List=()=>{
    return(
        <>
        <ul>
              <ListItem fruit="mango" price={100}/>
              <ListItem fruit="banana" price={200}/>
              <ListItem fruit="graphes" price={100}/>
        </ul>
        </>
    )
}
export default List