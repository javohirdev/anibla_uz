import React, {Component} from "react";
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Row, Col } from "reactstrap";
import './dashboard.scss';
 
class Sidebar2 extends React.Component {
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
    return (
      <Sidebar style={{ width: "50%"}}
        sidebar={
            <ul className="link">
                <h3>Menu</h3>
                <li>
                    <a href="#">
                        Link 1
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 2
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 3
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 4
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 5
                    </a>
                </li>
            </ul>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "15%" } }}
      >
        <MenuIcon className="hamburger" onClick={() => this.onSetSidebarOpen(true)}/>
      </Sidebar>
    );
  }
}
 
export default Sidebar2;