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
  type: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Button;