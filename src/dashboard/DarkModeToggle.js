import React from 'react';
import useDarkMode from 'use-dark-mode';
import { CustomInput } from 'reactstrap';
 
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
 
  return (
    <div className="DarkModeToggle">
      <span class="mr-1">
        ☀
      </span>
      <CustomInput type="switch"
        checked={darkMode.value} 
        onChange={darkMode.toggle}
        id="exampleCustomSwitch"
        name="customSwitch" 
      />
      <span>
        ☾
      </span>
    </div>
  );
};
 
export default DarkModeToggle;