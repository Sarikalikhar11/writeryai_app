import React, { useState } from 'react';
import './toggle.css';
import cx from 'classnames';
import { Button } from 'react-bootstrap';

const Toggle = ({ isOn, handleToggle, onColor }) => {
  //   const sliderCX = cx('slider', {
  //     rounded: rounded,
  //   });
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Toggle;
