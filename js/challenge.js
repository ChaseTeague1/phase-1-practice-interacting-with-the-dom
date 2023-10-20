//timer increasing every second once page loaded.
let counter = document.querySelector('#counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let submitButton = document.getElementById('submit');
let buttons = [minus, plus, heart, submitButton];

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

heart.addEventListener('click', () => {
    likeTimer();
})

pause.addEventListener('click', () => {
   pauseTimer();
   
})

submitButton.addEventListener('click', (event) => {
    leaveComment();
     event.preventDefault();
})
let time = 0;
let isPaused = false;
//starts the timer to increase by 1 each second
function startTimer(){
    if (isPaused == false ) {
        time ++;
        counter.innerText = `${time}`;
    } 

}
setInterval(startTimer, 1000);

//decreases the timer when minus button is clicked
function decreaseTimer(){
    counter.innerHTML = `${time --}`;
}

//increases the timer whenever the plus button is clicked.
function increaseTimer(){
    counter.innerHTML = `${time ++}`;
}

//enables liking the counter
const emptyObj = {};

function likeTimer(){
    if(emptyObj[counter.innerHTML]){
        emptyObj[counter.innerHTML] += 1;
        const likedLi = document.getElementById(counter.innerHTML);
        likedLi.textContent = `${counter.innerHTML} has been liked ${emptyObj[counter.innerHTML]} times`;
    }else{
        emptyObj[counter.innerHTML] = 1
        const uL = document.getElementsByClassName('likes')[0];
        const lI = document.createElement('li');
        lI.textContent = `${counter.innerHTML} has been liked 1 time`;
        lI.id = counter.innerHTML;
        uL.appendChild(lI);
    }
}

//enables the comment section to work 
function leaveComment(){
    let commentBox = document.getElementById('comment-input');
    let commentList = document.getElementById('list');
    let p = document.createElement('p');
    commentList.appendChild(p);
    p.innerHTML = `${commentBox.value}`;
    commentBox.value = '';
}

function pauseTimer(){
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        buttons.forEach((e) => {
            e.disabled = true;
        });
        isPaused = !isPaused;
    } else {
        pause.innerText = 'pause';
        buttons.forEach((e) => {
            e.disabled = false;
        });
        isPaused = !isPaused;
    }
}; 