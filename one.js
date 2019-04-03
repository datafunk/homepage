const input = document.getElementById('input');
const output = document.getElementById('output');

const welcome = `${location.host}`;
const w_arr = Array.from(welcome);


let i = 0;
const tracker = setInterval(() => {
    if(output.textContent.length > w_arr.length -1){
        output.innerHTML += '<br>';
        clearInterval(tracker);
        input.focus();
    } else {
        output.textContent += w_arr[i];
    }
    i++;
}, 100);


input.value = null;

const _input = [];

input.addEventListener('keyup', event => {

    switch(event.which){
        case 8, 17, 18, 224:
            console.log(event.which, event.key);
        case 13:
            console.log('Enter');
            output.innerHTML += '<br>';
            output.innerHTML += input.value;
            input.value = null;
            input.focus();
            console.log(output.innerText);
        default:
            console.log(event.which, event.key);
            break;
    }
});