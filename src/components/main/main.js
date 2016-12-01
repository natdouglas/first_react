// External Dependencies
import React from "react";
import { Link, browserHistory } from "react-router";
import { Menu } from "semantic-ui-react";
import { connect } from 'react-redux';

// Internal Dependencies
import { changeActiveMenu } from '../../actions/action';

import "./main.css";

const PrimaryMenu = React.createClass({
  getInitialState() {
    return {
      activeItem: "overviewPrimary"
    }
  },
  handleItemClick (e, { name }) { //name reflects the routeName
    this.setState({activeItem: name});
    browserHistory.push(name);
  },
  renderMenu(menu) {
    console.log(this.state);
    //const activeItem = this.state.routing.locationBeforeTransitions.pathname;
    //console.log(this.props.data);
    //console.log(this.props);
    //console.log(activeItem);

    return (
      <div id="primary-menu">
        <Menu pointing>
          <Link to={menu[0].routeName}><Menu.Item name={menu[0].routeName} active={activeItem === menu[0].routeName} onClick={this.handleItemClick}>{menu[0].menuName}</Menu.Item></Link>
          <Link to={menu[1].routeName}><Menu.Item name={menu[1].routeName} active={activeItem === menu[1].routeName} onClick={this.handleItemClick}>{menu[1].menuName}</Menu.Item></Link>
          <Link to={menu[2].routeName}><Menu.Item name={menu[2].routeName} active={activeItem === menu[2].routeName} onClick={this.handleItemClick}>{menu[2].menuName}</Menu.Item></Link>
          <Link to={menu[3].routeName}><Menu.Item name={menu[3].routeName} active={activeItem === menu[3].routeName} onClick={this.handleItemClick}>{menu[3].menuName}</Menu.Item></Link>
          <Link to={menu[4].routeName}><Menu.Item name={menu[4].routeName} active={activeItem === menu[4].routeName} onClick={this.handleItemClick}>{menu[4].menuName}</Menu.Item></Link>
          <Link to={menu[5].routeName}><Menu.Item name={menu[5].routeName} active={activeItem === menu[5].routeName} onClick={this.handleItemClick}>{menu[5].menuName}</Menu.Item></Link>
        </Menu>
      </div>
    )
  },
  render() {
    const menu = this.props.data;
    return (
      <div id="menu">
        {this.renderMenu(menu)}
      </div>
    )
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  };

  render() {
    const primaryMenuList = [
      { id: 0, menuName: "My Overview",routeName: "overviewPrimary"},
      { id: 1, menuName: "Mortgage",routeName: "mortgagePrimary"},
      { id: 2, menuName: "Property",routeName: "propertyPrimary"},
      { id: 3, menuName: "Messages",routeName: "messagesPrimary"},
      { id: 4, menuName: "Account Settings",routeName: "accountPrimary"},
      { id: 5, menuName: "Statements & Documents",routeName: "statementPrimary"}
    ];
    console.log(this.state);
    return (
      <div id="main">
        <PrimaryMenu routing = {this.props.routing } data={primaryMenuList}/>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({ routing:state.routing }),
  { changeActiveMenu }
)(Main)