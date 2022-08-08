import { Fragment } from "react";
import PropTypes from 'prop-types'

const Result = ({value}) => {

  return (
    <Fragment>
      <span>{value}</span>
    </Fragment>
  )
}

Result.propTypes = {
  value: PropTypes.string.isRequired
}

Result.defaultProps = {
  value:"0",
}
export default Result;