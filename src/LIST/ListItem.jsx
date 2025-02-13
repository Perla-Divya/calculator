import PropTypes from "prop-types"
let ListItem=(props)=>{
    console.log(props)
    let {fruit}=props;
    return(
        <>
        <li>{fruit}</li>
        </>
    )
}
export default ListItem
