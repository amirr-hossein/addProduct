const Input=(props)=>{
    return(
        <>
            <input type={props.type} ref={props.refs}  id={props.id} value={props.value} onChange={props.change}/>
        </>
    )
}
export default Input