import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const numbers = [7,8,9,4,5,6,1,2,3,0];

const Numbers = ({onClickNumber}) => {
  return (
    <section className='numbers'>
    {numbers.map(number => (
      <Button 
        key={number} 
        text={number} 
        clickHandler={onClickNumber}
      />
    ))}
    </section>
  )
}
Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export default Numbers;