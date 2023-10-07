let body = document.querySelector("body");
let myAudio = document.querySelector('audio');

document.body.addEventListener("keydown", function(e){
    let keycodes = e.keyCode;
    let keys = e.key;
    body.innerHTML = `
    <p class="key"> You pressed ${keys} </p>
    <p class= "key"> ${keycodes} </p>
    `;
    myAudio.play();
});
