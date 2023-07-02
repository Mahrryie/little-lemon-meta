import React from 'react';

const Button = ({btnClass, children}) => {
  return (
    <button class={btnClass ? btnClass : ''}>{children}</button>
  )
}

export default Button;