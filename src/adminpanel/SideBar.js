import React from "react";
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './design.scss';
 
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    const routingStyle = {
        textDecoration: "none"
    }
    return (
      <Sidebar
        sidebar={
            <div className="general">
                <Link className="admin-brand" to="/page1">
                  Logo
                </Link>
                <ul className="links">
                    <li>
                        <Link style={routingStyle} to="/page2">
                            Content2
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Link
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Link
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Link
                        </Link>
                    </li>
                </ul>
            </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "20%" } }}
        className="sidebar"
      >
        <FontAwesomeIcon icon={faBars} 
            className="ml-3" 
            onClick={() => this.onSetSidebarOpen(true)} 
        />
      </Sidebar>
    );
  }
}
 
export default SideBar;