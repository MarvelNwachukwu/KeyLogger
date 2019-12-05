window.addEventListener('keyup',KeyLogger);
function KeyLogger(e) {
   
        document.getElementById('text').innerHTML = e.key;
        console.log(e.keyCode);

}