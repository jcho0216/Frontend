let list = document.querySelector('#list');
let InputBox = document.querySelector('.input-box');
let delBtn = document.querySelector('.delBtn');
let editBtn = document.querySelector('.editBtn');


const AddList = () => {
    let itemList = document.createElement('li');
    let delBtn = document.createElement('img');
    let editBtn = document.createElement('img');

    delBtn.setAttribute('class', 'delBtn');
    delBtn.setAttribute('src', "https://img.icons8.com/ios/50/000000/delete--v3.png");
        
    editBtn.setAttribute('class', 'editBtn');
    editBtn.setAttribute('src', "https://img.icons8.com/ios/50/000000/create-new.png");

    if(InputBox.value !== ""){
        itemList.innerHTML = InputBox.value;
        list.appendChild(itemList); 
        itemList.appendChild(delBtn);
        itemList.appendChild(editBtn);
        InputBox.value = "";
    }
    else {
        alert('할일이 없군요...');
    }
    
}








