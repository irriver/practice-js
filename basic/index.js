function external_call() {
    alert('external called!');
}

window.document.write('Write Down in Window!<br>');
document.write('Can skip writing "Window"');
console.log('10 + 100');

let firstElem = window.document.forms[0].elements[2];
console.log(firstElem);
console.log(firstElem.type);
