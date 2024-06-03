document.getElementById('toggle-button').addEventListener('click', function(){
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'styleBlack.css') {
        stylesheet.getAttribute('href', 'styleWhite.css') ;
    } else {
        stylesheet.setAttribute('href', 'styleBlack.css');
    }
});

  
