import { Redux ,createStore, reducer, getState } from 'redux';

console.log(Redux);
console.log(1);
function reducer(state, action) {
    if(state === undefined) {
        return {color: 'yellow'}
    }
}

const store = Redux.createStore(reducer);
console.log(store.getState());

function red() {
    document.querySelector('#red').innerHTML = `
    <div class="container" id="component_red" style="background-color:yellow">
    <h1>red</h1>
    <input type="button" value="fire" onclick="
    document.querySelector('#component_red').style.backgroundColor = 'red';
    document.querySelector('#component_green').style.backgroundColor = 'red';
    document.querySelector('#component_blue').style.backgroundColor = 'green';
    ">
    </div>
    `;
}
red();
