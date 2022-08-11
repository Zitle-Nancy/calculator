import Button from './Button';
import PropTypes from 'prop-types'
const Functions = ({onContentClear,onDelete }) => {
  return(
    <section className="functions">
      <Button buttonType="button-long-text" text="clear" clickHandler={onContentClear}/>
      <Button buttonType="&larr;" text="r" clickHandler={onDelete}/>  
    </section>
  )
}

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default Functions;