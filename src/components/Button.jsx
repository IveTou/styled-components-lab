import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: ${props => props.theme.fontSize || '1.5rem'};
  text-align: center;
  color: black;
`;

function Button({ value, ...props}) {
  return (
    <StyledButton {...props}>{value}</StyledButton>
  )
}

export default Button

