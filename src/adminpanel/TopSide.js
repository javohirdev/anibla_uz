import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SideBar from './SideBar';

const TopSide = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="TopSide">
        <div className="menu">
            <div className="main d-flex justify-content-end">
                <SideBar />
                <div className="account mr-3">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Account
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem>Log out</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TopSide;