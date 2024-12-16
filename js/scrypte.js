
document.getElementById('menu-icone').addEventListener('click', function() {
            document.getElementById('navbar').classList.toggle('active');
        });


// for popup
function popupToggle(){
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

function popupToggle1(){
    const popup = document.getElementById('popup1');
    popup.classList.toggle('active');
}

function popupToggle2(){
    const popup = document.getElementById('popup2');
    popup.classList.toggle('active');
}

function popupToggle3(){
    const popup = document.getElementById('popup3');
    popup.classList.toggle('active');
}

function popupToggle4(){
    const popup = document.getElementById('popup4');
    popup.classList.toggle('active');
}
function popupToggle5(){
    const popup = document.getElementById('popup5');
    popup.classList.toggle('active');
}



function initializeCounter() {
    const nub = document.querySelector('.num'); 
    let i = 0;
    nub.textContent = i; 

    var btns = document.getElementsByClassName('inputBox');

    for (let btn of btns) {
        btn.addEventListener('click', () => {
            i++; 
            nub.textContent = i;
        });
    }
}

initializeCounter();


function reset(){
    const popup = document.getElementsByClassName('circle');
    popup.classList.toggle('active');
}
