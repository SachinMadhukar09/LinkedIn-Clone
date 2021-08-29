import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/128/174/174857.png" />
        <div className="header__search">
          <SearchIcon />
          <input type="text"/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://img-premium.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1630230619~hmac=c2ede5d1ed2eb56bbd4dda0726b702af" title="me" />

      </div>
    </div>
  );
}
export default Header;
