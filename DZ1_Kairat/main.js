const intext = document.getElementById('input1')
const btn = document.getElementById('btn1')
console.log(intext.value)
btn.addEventListener('click', e =>
{
    if (intext.value != '') alert(intext.value)
    else alert('Введите ваше ФИО')
})
let date = new Date().getMonth()
const mouth = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]
const button = document.querySelector('.moon')
const rezalt = document.querySelector('.answer')
button.addEventListener('click', e =>
{
    rezalt.innerText = mouth[date];
})