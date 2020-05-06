import '../css/main.scss'
import '../css/com2.scss'

// src/index.js
function component() {
    var element = document.createElement('div');
    element.innerHTML = "Hello Webpack";
    return element;
}
document.body.appendChild(component());
$('body').css('background', 'black')
console.log($('body'))
console.log('contentHash Test')