const card=({img,name,description,handleClick})=>{
    return(
        <div id="card">
             <img height={200} width={200} src={img} alt="" />
             <h2>{name}</h2>
             <p>{description}</p>
             <button onClick={handleClick}>Read More...</button>
        </div>
    )
}
export default Card