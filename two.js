// const input = document.getElementById('input');
// const output = document.getElementById('output');

console.log(input, output);


const w = [
    'one',
    'two'
];

function addMore() {
    output.innerHTML += '<br>';
    w.forEach(s => {
        s = Array.from(s);
        s.forEach(_s => {
            output.innerHTML += _s;
        });
        output.innerHTML += '<br>';
    });
}