const Button=(props)=>{
    return(
        <>
            <button onClick={props.click} className={`${props.className}`} style={props.style}>{props.children}</button>
        </>
    )
}
export default Button