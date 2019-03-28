const input = document.getElementById('input');
const output = document.getElementById('output');

const welcome = 'Welcome!';

const wArr = Array.from(welcome);

let i = 0;
const tracker = setInterval(() => {
    if (output.textContent.length > wArr.length - 1) {
        output.innerHTML += '<br>';
        clearInterval(tracker);
        input.focus();
    } else {
        output.textContent += wArr[i];
    }
    i++;
}, 200);

input.value = null;
const _input = [];

input.addEventListener('keyup', event => {

    switch (event.key) {
        case 'Enter':
            output.innerHTML += ` <br> `;
            output.innerHTML += input.value;
            input.value = null;
        case 'Backspace':
            output.textContent.length--;
        case 'Shift':
        case 'Control':
        case 'Alt':
        case 'Meta':
            console.log('UnBound', event.key);
            break;
        default:
            console.log('key', event.key);
            _input.push(event.key);
            // output.innerHTML += event.key;
    }


});


// works but changing it
// input.addEventListener('keyup', event => {

//     switch (event.key) {
//         case 'Enter':
//             input.value = null;
//             output.innerHTML += ` <br> `;
//         case 'Backspace':
//             output.textContent.length--;
//         case 'Shift':
//         case 'Control':
//         case 'Alt':
//         case 'Meta':
//             console.log('UnBound', event.key);
//             break;
//         default:
//             _input.push(event.key);
//             output.innerHTML += event.key;
//     }


// });