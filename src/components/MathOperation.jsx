import PropTypes from 'prop-types'
import Button from './Button'
const MathOperation = ({onClickOperation, onClickEqual}) => {
  return (
    <section className="math-operations">
      <Button text="+" clickHandler={onClickOperation}/>
      <Button text="-" clickHandler={onClickOperation}/>
      <Button text="*" clickHandler={onClickOperation}/>
      <Button text="/" clickHandler={onClickOperation}/>
      <Button text="=" clickHandler={onClickEqual}/>
    </section>
  )
}

MathOperation.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
}

export default MathOperation;