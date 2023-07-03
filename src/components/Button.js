import React from 'react';

const Button = ({btnClass, children}) => {
  return (
    <button className={btnClass ? btnClass : ''}>{children}</button>
  )
}

export default Button;