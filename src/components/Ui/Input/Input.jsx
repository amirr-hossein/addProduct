const Input=({type,refs,id,value,change,className})=>{
    return(
        <>
            <input type={type} ref={refs} id={id} value={value} onChange={change} className={`${className}`} />
        </>
    )
}
export default Input