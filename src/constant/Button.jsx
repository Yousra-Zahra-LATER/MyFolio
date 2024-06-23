import React from 'react';
import cn from 'classnames';

const Button = ({ text, additionalClasses, onClick }) => {
  const commonClasses = 'text-white bg-pink-800 hover:bg-pink-900 border-0 rounded-md ';

  return (
    <button className={cn(commonClasses, additionalClasses)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;