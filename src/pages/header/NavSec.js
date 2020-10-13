import React, { useState, useEffect } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const NavSec = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('fixed');
  }

  return (
    <div className="NavSec">
      <Navbar className={x.join(" ")} color="faded" light>
        <NavbarBrand href="/" className="ml-5">
            Anibla.uz
        </NavbarBrand>
        <div className="searchSection">
            <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="commentRegister">
          <FontAwesomeIcon icon={faComment} />
          <Link to="/sign-in">
            <FontAwesomeIcon className="ml-1" icon={faUser} />
          </Link>
        </div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2">
          <FontAwesomeIcon icon={faBars} />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-5" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Link
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Link
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Link
              </NavLink>
            </NavItem>
            <div className="mobileRegCom d-none">
              <Link to="/comment">
                <FontAwesomeIcon className="ml-1" icon={faComment} />
              </Link>
              <Link to="/sign-in">
                <FontAwesomeIcon className="ml-1" icon={faUser} />
              </Link>
            </div>
            <div className="mobileSearchSec d-none">
              <input type="text" className="form-control w-25" placeholder="Search" />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavSec;