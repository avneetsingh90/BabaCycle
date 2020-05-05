import React from 'react';
import './TopNavBar.css';

const TopNavBar = () => {return (
    <header className="main-header " id="header">
        <nav className="navbar navbar-static-top navbar-expand-lg">
            <button id="sidebar-toggler" className="sidebar-toggle">
                {<span className="sr-only">Toggle navigation</span>}
            </button>
        </nav>
    </header>
)}
export default TopNavBar;