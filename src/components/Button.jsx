import React from 'react'
import styled from 'styled-components'

export default styled(Button)`
  font-size: ${props => props.theme.fontSize || '1.5rem'};
  text-align: center;
  color: black;
  
  &.loading {

  }

  &.disabled {
    color: red;
  }
`;

function Button({ value, className, state, ...props}) {
  return (
    <button 
      className={`${className} ${state}`} 
      {...props}
    >
      {value}
    </button>
  )
}