import React from "react";
import Select, {components} from "react-select";
import styles from "./SelectBox.module.scss";

const Option = ({children, ...props}) => {
  return (
    <components.Option {...props}>
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer'}}>
        <img
          style={{paddingRight: '15px', width: '40px', height: '40px'}}
          src={`/images/token-icons/tokens/${props.value}.svg`}
          alt=""
        />
        {children}
      </div>
    </components.Option>
  );
};

const Control = ({children, ...props}) => {
  const option = props.getValue()?.[0];
  return (
    <components.Control {...props}>
      {option?.value && (
        <img
          style={{paddingRight: '15px', width: '40px', height: '40px'}}
          src={`/images/token-icons/tokens/${option.value}.svg`}
          alt=""
        />
      )}
      {children}
    </components.Control>
  )
};


const SelectBox = ({options, value, onChange}) => {
  return (
    <div className={styles.select}>
      <Select
        options={options}
        onChange={onChange}
        value={value}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            cursor: 'pointer',
            background: 'rgba(198, 213, 234, 0.5)',
            border: 'none',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            padding: '10px',
            ":hover": {
              backgroundColor: 'rgba(198, 213, 234, 0.7)',
            }
          }),
          indicatorsContainer: (baseStyles) => ({
            ...baseStyles,
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            paddingLeft: 0,
            paddingRight: 0,
          })
        }}
        components={{Control, Option, IndicatorSeparator: () => null}}
      />
    </div>
  )
}

export default SelectBox;
