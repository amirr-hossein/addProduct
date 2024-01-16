const Input=(props)=>{
    return(
        <>
            <input type={props.type} id={props.id} value={props.value} onChange={props.change}/>
        </>
    )
}
export default Input