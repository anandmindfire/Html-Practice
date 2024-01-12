// Card animations
const addCardAnimation = (selector) => {
    const card = document.querySelector(selector);

    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.03)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
};

// Employee table card animation
addCardAnimation('.card-emplist');

// Table row animations
const addTableRowAnimations = () => {
    const table = document.getElementById('employeelist');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener('mouseover', () => {
            rows[i].style.backgroundColor = 'white';
        });

        rows[i].addEventListener('mouseout', () => {
            rows[i].style.backgroundColor = '';
        });
    }
};

addTableRowAnimations();
