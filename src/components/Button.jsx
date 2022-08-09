import PropTypes  from "react";
import './Button.css';

const Button = ({buttonType ,text, clickHandler}) => {
  return(
    <button className={buttonType} onClick={() => clickHandler(text)}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string, // este debería ser requerido
  text: PropTypes.string, // revisar los errores
  clickHandler: PropTypes.func // da error al poner required
}

export default Button;