const Button=({className,click,style,children,type})=>{
    return(
        <>
            <button type={type} onClick={click} style={style} className={`${className}`}>{children}</button>
        </>
    )
}
export default Button