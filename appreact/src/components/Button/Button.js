import './Button.css'

const Button = ({ backgroundColor = '#C4C4C4', colorText= '#000000', handleClick, children, ...rest}) => {
    return (
        <button className="myButton" style={{ backgroundColor, color: colorText }} onClick={handleClick}>{children}</button>
    )
}

export default Button