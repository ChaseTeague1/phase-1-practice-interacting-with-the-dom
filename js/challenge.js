//timer increasing every second once page loaded.
let counter = document.querySelector('#counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

//starts the timer whenever the page is refreshed
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});

//enable the minus button to work when clicked
minus.addEventListener('click', () => {
    decreaseTimer();
});

//enable the plus button to work when clicked
plus.addEventListener('click', () => {
    increaseTimer();
})

//starts the timer to increase by 1 each second
function startTimer(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1;  

}
setInterval(startTimer, 1000);

//decreases the timer when minus button is clicked
function decreaseTimer(){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

//increases the timer whenever the plus button is clicked.
function increaseTimer(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}