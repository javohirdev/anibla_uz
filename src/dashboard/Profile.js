import React, { useState } from 'react';
import { 
    Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap';
import './dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DarkModeToggle from './DarkModeToggle';
import { faComment, faBell, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="profile">
            <Container>
               <Row>
                   <div className="main">
                       <div className="generalSection d-flex">

                            <div className="profile">
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        <img className="w-75 rounded-circle mr-3" src="/images/javohirdev.jpg" alt="ProfileImg" />
                                        Name
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Link</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div className="sections d-flex mt-3">
                                <DarkModeToggle className="d-flex" />
                                <a href="#">
                                    <FontAwesomeIcon icon={faComment} />                                    
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faBell} />                                    
                                </a> 
                                <a href="#">
                                    <FontAwesomeIcon icon={faQuestionCircle} />                                    
                                </a>
                            </div>

                       </div>
                   </div>
               </Row>
            </Container>
            
        </div>
    )
}

export default Profile;