import React from 'react'
import styled from 'styled-components'

export default styled(Button)`
  font-size: ${props => props.theme.fontSize || '1.5rem'};
  text-align: center;
  color: black;
`;

function Button({ value, className, ...props}) {
  return (
    <button className={className} {...props}>{value}</button>
  )
}