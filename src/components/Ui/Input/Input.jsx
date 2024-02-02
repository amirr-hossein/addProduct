const Input=({type,refs,id,value,change,className,dir})=>{
    return(
        <>
            <input type={type} ref={refs} id={id} value={value} onChange={change} className={`${className}`} dir={dir}/>
        </>
    )
}
export default Input