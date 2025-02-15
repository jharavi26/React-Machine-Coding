import React from 'react';
import "./style.css";

function Layout() {
  return (
    <>
    <div className='wrapper'>
    <div className='header'>Header</div>
    <div className='container'>
    <div className='navigation'>Navigation</div>
    <div className='main'>Main</div>
    <div className='sidebar'>SideBar</div>
    </div>
    <div className='footer'>Footer</div>
    </div>
    </>
  )
}

export default Layout