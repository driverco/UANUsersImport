
// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar} from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className="m-0 p-0">
        <Navbar dark color="dark">
          {
            items && items.map(
              (item, key) => {
                return (<div className="menuItem" key={"menu"+item.title}><Link to={item.url}><i className="material-icons icon">{item.icon}</i>{item.title}</Link></div>);
              }
            )
          }

        </Navbar> 
      </div>
    );
  }
}

export default Header;

