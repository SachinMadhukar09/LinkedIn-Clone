import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem" >
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    ) 
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1628008630683-fb2a5c6d94fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Sachin Madhukar</h2>
        <h4>Sachinmadhukar@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">2,432</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewes on Post</p>
          <p className="sidebar__statNumber">2,432</p>
        </div>
      </div>
      <div className="sidebar__bottom" >
          <p>Recent</p>
          {recentItem('reactJs')}
          {recentItem('Programming')}
          {recentItem('Design')}
          {recentItem('Developer')}
          {recentItem('angularJs')}


      </div>
    </div>
  );
}

export default Sidebar;
