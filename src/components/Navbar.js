import React, { useState } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import theIconicLogo from "../assets/the-iconic-logo.jpg";
import "./Navbar.scss";

function Navbar() {
  const [activeItem, setactiveItem] = useState("WOMEN");

  function handleItemClick(e, { name }) {
    setactiveItem(name);
  }

  return (
    <div>
      <Segment className="navbar-container" inverted>
        <Menu inverted pointing secondary>
          <img
            className="navbar-logo"
            src={theIconicLogo}
            alt="the iconic logo"
          />
          <Menu.Item
            name="WOMEN"
            active={activeItem === "WOMEN"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="MEN"
            active={activeItem === "MEN"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="KIDS"
            active={activeItem === "KIDS"}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="user" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="heart outline" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="shopping bag" size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
}

export default Navbar;
