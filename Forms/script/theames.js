document.addEventListener('DOMContentLoaded', function () {
    // Function to set the theme
    function setTheme(theme) {
        document.body.style.backgroundColor = theme.bodyColor;
        document.getElementById('submit').style.backgroundColor = theme.buttonColor;
        document.getElementById('reset').style.backgroundColor = theme.buttonColor;
        document.getElementById('dropbtn').style.backgroundColor = theme.buttonColor;
        document.getElementById('dropbtn').style.borderColor = theme.buttonColor;
        document.getElementById('dropcontent').style.backgroundColor = theme.buttonColor;
        document.getElementById('head').style.color = theme.textColor;

        var listTables = document.querySelectorAll('table.list thead>tr');
        listTables.forEach(function (headerRow) {
            headerRow.style.backgroundColor = theme.tableHeaderColor;
        });

        // Save the selected theme to local storage
        localStorage.setItem('selectedTheme', JSON.stringify(theme));
    }

    // Click event listeners for theme buttons
    document.getElementById('dark').addEventListener('click', function () {
        setTheme({
            bodyColor: '#31304D',
            buttonColor: '#31304D',
            textColor: '#31304D',
            tableHeaderColor: '#B6BBC4'
        });
    });

    document.getElementById('light').addEventListener('click', function () {
        setTheme({
            bodyColor: '#86B6F6',
            buttonColor: '#86B6F6',
            textColor: '#3468C0',
            tableHeaderColor: '#A1EEBD'
        });
    });

    document.getElementById('sunny').addEventListener('click', function () {
        setTheme({
            bodyColor: '#FFB534',
            buttonColor: '#FFB534',
            textColor: '#E36414',
            tableHeaderColor: '#FFF78A'
        });
    });

    // Check if a theme is already selected and apply it
    var storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        setTheme(JSON.parse(storedTheme));
    }
});
