import React from 'react';
import cn from "classnames";
import styles from './Input.module.scss';

const Input = ({type, value, placeholder, onChange, className, rest}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={cn(styles.input, className)}
      onChange={onChange}
      {...rest}
    />
  )
}
export default Input;
