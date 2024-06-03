document.getElementById('toggle-button').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'style1.css') {
        stylesheet.setAttribute('href', 'style2.css');
    } else {
        stylesheet.setAttribute('href', 'style1.css');
    }
});
