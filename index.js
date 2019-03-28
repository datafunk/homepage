const input = document.getElementById('input');
const output = document.getElementById('output');

// console.log(nlp);

const welcome = `
    www @ borbely.info
`;



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
}, 50);

input.value = null;
const _input = [];

input.addEventListener('keyup', event => {

    switch (event.key) {
        case 'Enter':

            understand(input.value);

            output.innerHTML += ` <br> `;
            output.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;`;
            // output.innerHTML += input.value;
            output.innerHTML += understand(input.value);
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

function understand(str) {
    // console.log(str);
    const doc = nlp(str);
    console.log(doc);
    return nlp(str).out('text');
}



const int = setInterval(() => {
    if (typeof addMore !== undefined) {
        clearInterval(int);
        addMore();
    }
}, 1000);