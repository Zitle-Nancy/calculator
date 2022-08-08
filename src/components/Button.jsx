import PropTypes  from "react";
const Button = ({buttonType ,text, clickHandler}) => {
  return(
    <button className={buttonType} onClick={clickHandler}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string, // revisar los errores
  type: PropTypes.string,
  clickHandler: PropTypes.func // da error al poner required
}

export default Button;