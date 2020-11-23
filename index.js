const input = document.getElementById('input');
const output = document.getElementById('output');

nlp.extend(compromiseSentences) //done.
console.log('nlp', nlp);

const welcome = `
borbely.info: 418

I am just and experiment.
Please be patient with me... :)
`;

// server refuses to brew coffee because it is, permanently, a teapot


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
}, 30);

input.value = null;
const _input = [];

input.addEventListener('keyup', event => {

    switch (event.key) {
        case 'Enter':
            output.textContent += `\n>\t${input.value}`
            understand(input.value);
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
    console.log('trying to understand ', str);
    const doc = nlp(str);
    // console.log(doc)

    // const _json = JSON.stringify(doc.json(), null, 2)
    // console.log(_json);

    console.log(doc.sentences().json());
    console.log('?', doc.sentences().isQuestion());
    console.log(doc.sentences().subjects().text());

    // console.log(doc.list[0].terms);


    // this is how we could navigate...
    // if (str === 'about') {
    //     document.location.pathname = 'about';
    // } else {
    //     return nlp(str).out('text');
    // }

    if (str.indexOf('418') > -1) {
        str = '418';
    } else if (str.indexOf('about') > -1) {
        str = 'about'
    } else if (str.indexOf('bye') > - 1) {
        str = 'bye'
    }

    let res = '';

    switch (str) {
        case '418':
            console.log('this should run')
            res = `"I'm a teapot client error response code indicates that \nthe server refuses to brew coffee because it is, permanently, a teapot."`
            break;
        case 'about':
            res = `So you'd like to know more?`
            break;
        case 'bye':
            res = 'bye'
            break;
        case 'yes':
            res = `I'm working on that`
            break;
        default:
            res = `I'm just a teapot and you're asking me to brew coffee.`
    }

    output.innerHTML += `\n${res}`
    // return nlp(str).out('text');

}
