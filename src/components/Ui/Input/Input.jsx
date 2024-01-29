const Input=({type,refs,id,value,change})=>{
    return(
        <>
            <input type={type} ref={refs} id={id} value={value} onChange={change} />
        </>
    )
}
export default Input