import React, { useEffect } from 'react';

const setTheme = (theme) => {
  
  document.getElementById('area').style.backgroundColor = theme.bodyColor;
  document.getElementById('submit').style.backgroundColor = theme.buttonColor;
  document.getElementById('submit').style.color = theme.buttontextColor;
  document.getElementById('reset').style.backgroundColor = theme.buttonColor;
  document.getElementById('reset').style.color = theme.buttontextColor;
  document.getElementById('dropbtn').style.backgroundColor = theme.buttonColor;
  document.getElementById('dropbtn').style.borderColor = theme.buttonColor;
  document.getElementById('dropcontent').style.backgroundColor = theme.buttonColor;
  document.getElementById('head').style.color = theme.textColor;
  document.getElementById('cardarea').style.backgroundColor = theme.tableHeaderColor;
  const circles = Array.from(document.querySelectorAll('#area .circles li'));
  circles.forEach((circle) => {
    circle.style.backgroundColor = theme.circleColor; 
  });
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
    <div className="overflow-hidden flex justify-between items-center bg-white max-h-20 fixed top-0 w-full z-10 h-14 sticky">
      <div className="float-left ml-4">
  <img src="./images/logo.webp" alt="Logo" className="w-38 h-8" />
</div>

    <div className="heading text-xl md:text-3xl lg:text-4xl text-center flex-grow">
      <h2 id="head">Employee Registration</h2>
    </div>

      <div className="dropdown float-right mr-4">
        <button className="dropbtn bg-steel-800 p-2 font-sans rounded-md cursor-pointer text-white shadow-md" id="dropbtn">
          🌈Themes
        </button>
        <div className="dropdown-content hidden fixed bg-steel-800 rounded-md border border-steel-800 min-w-85 shadow-md z-10" id="dropcontent">
          <a className="text-white py-3 px-2 block no-underline hover:bg-gray-300" href="#" onClick={handleThemeChange({
            bodyColor: '#31304D',
            buttonColor: '#31304D',
            textColor: '#31304D',
            tableHeaderColor: '#B6BBC4',
            buttontextColor:'white',
            circleColor:'#B6BBC4'
          })}>
            Dark ☁️
          </a>
          <a className="text-white py-3 px-2 block no-underline hover:bg-teal-300" href="#" onClick={handleThemeChange({
            bodyColor: '#86B6F6',
            buttonColor: '#86B6F6',
            textColor: '#3468C0',
            tableHeaderColor: '#A1EEBD',
            buttontextColor:'#3468C0',
            circleColor:'#A1EEBD'
          })}>
            Light 🌙
          </a>
          <a className="text-white py-3 px-2 block no-underline hover:bg-yellow-300" href="#" onClick={handleThemeChange({
            bodyColor: '#FFB534',
            buttonColor: '#FFB534',
            textColor: '#E36414',
            tableHeaderColor: '#FFF78A',
            buttontextColor:'#E36414',
            circleColor:'#FFF78A'
          })}>
            Sunny ☀️
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
