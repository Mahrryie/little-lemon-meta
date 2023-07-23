import React from 'react';

const Button = ({btnClass, children, clickProp, disableCustomClick = false}) => {
  const handleClick = () => {
    if (disableCustomClick) {
      return
    }
    clickProp();
  }
  return (
    <button className={btnClass ? btnClass : ''} onClick={handleClick}>{children}</button>
  )
}

export default Button;