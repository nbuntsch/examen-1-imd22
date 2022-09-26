var buttonCC = document.querySelector('.change-color');
console.log(buttonCC)

var changeColor = function(){
    document.querySelector('.change-color').classList.add('purple');
}
console.log('purple')

buttonCC.addEventListener('click', changeColor)
