const Input=({type,refs,id,value,change,className,dir,style})=>{
    return(
        <>
            <input type={type} ref={refs} id={id} value={value} onChange={change} className={`${className}`} dir={dir} style={style}/>
        </>
    )
}
export default Input