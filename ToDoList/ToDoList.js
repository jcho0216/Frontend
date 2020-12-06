let list = document.querySelector('#list');
let InputBox = document.querySelector('.input-box');

const AddList = () => {
    let itemList = document.createElement('li');
    let delBtn = document.createElement('img');
    let editBtn = document.createElement('img');

    delBtn.setAttribute('class', 'delBtn');
    delBtn.setAttribute('src', "https://img.icons8.com/ios/50/000000/delete--v3.png");
        
    editBtn.setAttribute('class', 'editBtn');
    editBtn.setAttribute('src', "https://img.icons8.com/ios/50/000000/create-new.png");

    if(InputBox.value !== ""){
        itemList.innerHTML = InputBox.value; //인풋값 li안에 넣기
        list.appendChild(itemList); 
        itemList.appendChild(delBtn);
        itemList.appendChild(editBtn);
        InputBox.value = "";

        delBtn.addEventListener('click', function() { //삭제버튼 클릭 이벤트
            delBtn.parentElement.style.display="none";  
        });

        editBtn.addEventListener('click', function() { //수정버튼 클릭 이벤트
            let editValue = prompt("수정된 값을 입력해주세요", this.parentNode.firstChild.nodeValue);
            if(editValue !== "") {
                this.parentNode.firstChild.nodeValue = editValue;
            }
        });
    }
    
    else {
        alert('할 일이 없군요...');
    }
}


const enterKey = () => {
    if(window.event.keyCode == 13){
        AddList();
    }
}

