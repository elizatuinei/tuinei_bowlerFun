//Create a heading component for the web app that
//describes what the page is about.
import React from 'react';
import logo from './alleycats.png';

function Header(props: any) {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa', // Light background color
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
  };

  const navbarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle: React.CSSProperties = {
    width: '80px', // Adjust the width of the logo
    height: 'auto',
    marginRight: '15px',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#495057', // Dark text color
    fontSize: '18px',
    marginTop: '10px',
  };

  return (
    <header style={headerStyle}>
      <nav style={navbarStyle}>
        <img src={logo} style={logoStyle} alt="logo" />
        <div style={subtitleStyle}>Bowling Hub</div>
      </nav>
      <div style={subtitleStyle}>Your go-to place for bowling info!</div>
      <h1 className="text-black">{props.title}</h1>
    </header>
  );
}

export default Header;
