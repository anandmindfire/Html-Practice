//card animations
var card = document.querySelector('.card');

card.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.03)';
});

card.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});


//employee table card animation
var card_emplist = document.querySelector('.card-emplist');

card_emplist.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.03)';
});

card_emplist.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});


//table row animations

var table = document.getElementById('employeelist');
        var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        for (var i = 0; i <= rows.length; i++) {
            rows[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = 'white'; 
            });

            rows[i].addEventListener('mouseout', function() {
                this.style.backgroundColor = '';
            });
        }