const addbtn = document.querySelector('button');
const inputBox = document.querySelector('input');
const body = document.querySelector('body');

addbtn.addEventListener('click', show);
body.addEventListener('click', hide);


function show(){
    inputBox.classList.remove('hide');
};

function hide(){
    inputBox.classList.add('hide');
    console.log('body')
}