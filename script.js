const eventKeyP = document.querySelector('.eventKey'); 
const eventKeyCodeP = document.querySelector('.eventKeyCode');
const eventCodeP = document.querySelector('.eventCode');
const container = document.getElementsByClassName('container');





window.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        eventKeyP.innerHTML = 'space';
    } else eventKeyP.innerHTML = e.key;
    eventCodeP.innerHTML = e.code;
    eventKeyCodeP.innerHTML = e.keyCode;


});

//TODO: if statement on line 11 shortened?
//TODO: use JS to insert the html that goes into the container-div
//TODO: make the page show just instructions and no codes onload
