function Button({isActive, text, whenPressed}) {
    return (
        <>
            {isActive ? <button className="bg-lightgray rounded-md p-1 active:bg-lightgraydepressed" onClick={whenPressed}>{text}</button> : <></>}
        </>
    )
}
export default Button;