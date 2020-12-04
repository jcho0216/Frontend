let list = document.getElementById('list');
let InputBox = document.querySelector('.input-box');
let AddBtn = document.getElementsByClassName('add-btn');

const buttonClick = () => {
    list.innerHTML += ('<li>' + InputBox.value + '</li>');
}



