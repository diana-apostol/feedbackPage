// 1 add class list clicked to the buttons with the class of feedback (incearca cu query select all)
// tr sa fii sg ca doar un elem este selectat si daca se selecteaza altul se inchide asta deci prbl cv cu toggle?
//2 daca niciun buton de feedback nu e apasat sa nu permita sa dai submit
//3 cand dai submit sa iti apara un text cu 'Multumim pentru timpul acordat. Parerea ta conteaza pentru noi <3' ish


let chosenOne= document.querySelector('.chosenOne')
let chosenTwo= document.querySelector('.chosenTwo')
let chosenThree= document.querySelector('.chosenThree')
let chosenFour= document.querySelector('.chosenFour')
let chosenFive= document.querySelector('.chosenFive')
let submit= document.querySelector('#submit')
let container= document.querySelector('.container')
let input= document.querySelector('#input')

input.value= ''
let clicked= false

function terrible(){
    chosenOne.classList.add('clicked')
    chosenTwo.classList.remove('clicked')
    chosenThree.classList.remove('clicked')
    chosenFour.classList.remove('clicked')
    chosenFive.classList.remove('clicked')

    clicked= true
}

function bad(){
    chosenTwo.classList.add('clicked')
    chosenOne.classList.remove('clicked')
    chosenThree.classList.remove('clicked')
    chosenFour.classList.remove('clicked')
    chosenFive.classList.remove('clicked')

    clicked= true
}

function okay(){
    chosenThree.classList.add('clicked')
    chosenTwo.classList.remove('clicked')
    chosenOne.classList.remove('clicked')
    chosenFour.classList.remove('clicked')
    chosenFive.classList.remove('clicked')

    clicked= true
}

function good(){
    chosenFour.classList.add('clicked')
    chosenTwo.classList.remove('clicked')
    chosenThree.classList.remove('clicked')
    chosenOne.classList.remove('clicked')
    chosenFive.classList.remove('clicked')

    clicked= true
}

function amazing(){
    chosenFive.classList.add('clicked')
    chosenTwo.classList.remove('clicked')
    chosenThree.classList.remove('clicked')
    chosenFour.classList.remove('clicked')
    chosenOne.classList.remove('clicked')

    clicked= true
}

submit.addEventListener('click', ()=>{
    if ( clicked === true){
    container.innerHTML=`
    <h1 class='submit-text'> Thank you for your time!</h1>
    <p class='submit-text'>Have a great day! 😊</p>
    <button id='submit-btn' onclick='reloadBtn()'>Send another feedback</button>
    `} 
})

function reloadBtn(){
    location.reload()
}



