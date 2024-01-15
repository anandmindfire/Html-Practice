import React, { useEffect } from 'react';

const setTheme = (theme) => {
  //document.body.style.backgroundColor = theme.bodyColor;
  document.getElementById('area').style.backgroundColor = theme.bodyColor;
  document.getElementById('submit').style.backgroundColor = theme.buttonColor;
  document.getElementById('reset').style.backgroundColor = theme.buttonColor;
  document.getElementById('dropbtn').style.backgroundColor = theme.buttonColor;
  document.getElementById('dropbtn').style.borderColor = theme.buttonColor;
  document.getElementById('dropcontent').style.backgroundColor = theme.buttonColor;
  document.getElementById('head').style.color = theme.textColor;

  const listTables = document.querySelectorAll('table.list thead>tr');
  listTables.forEach((headerRow) => {
    headerRow.style.backgroundColor = theme.tableHeaderColor;
  });

  localStorage.setItem('selectedTheme', JSON.stringify(theme));
};

const Navbar = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('selectedTheme');

    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []); // Run only once on mount

  const handleThemeChange = (theme) => () => {
    setTheme(theme);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="./images/logo.webp" alt="Logo" width="150" height="50" />
      </div>
      <div className="heading">
        <h2 id="head">Employee Registration</h2>
      </div>
      <div className="dropdown">
        <button className="dropbtn" id="dropbtn">
          🌈Themes
        </button>
        <div className="dropdown-content" id="dropcontent">
          <a href="#" onClick={handleThemeChange({
            bodyColor: '#4e54c8',
            buttonColor: '#4e54c8',
            textColor: '#4e54c8',
            tableHeaderColor: '#B6BBC4'
          })}>
            Dark ☁️
          </a>
          <a href="#" onClick={handleThemeChange({
            bodyColor: '#86B6F6',
            buttonColor: '#86B6F6',
            textColor: '#3468C0',
            tableHeaderColor: '#A1EEBD'
          })}>
            Light 🌙
          </a>
          <a href="#" onClick={handleThemeChange({
            bodyColor: '#FFB534',
            buttonColor: '#FFB534',
            textColor: '#E36414',
            tableHeaderColor: '#FFF78A'
          })}>
            Sunny ☀️
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
