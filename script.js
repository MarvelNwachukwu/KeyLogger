window.addEventListener('keyup',KeyLogger);
function KeyLogger(e) {
    if (e.keyCode=='65') {
        document.getElementById('Text').innerHTML='A';
    }
    
}