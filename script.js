const addbtn = document.querySelector('#add');
const inputBox = document.querySelector('#input');
const body = document.querySelector('body');
const closebtn = document.querySelector('#close');
const text = document.querySelector('input');
const ul = document.querySelector('ul');

addbtn.addEventListener('click', show);
closebtn.addEventListener('click', hide);
text.addEventListener('keypress', check);

function show(){
    inputBox.classList.remove('hide');
};

function hide(){
    inputBox.classList.add('hide');
  
};

function check(x){
  if(x.keyCode === 13){
    generate();
    text.value = '';
  }
}

function generate(){
const  newLi = document.createElement('li');
  const li = ul.appendChild(newLi);
  li.textContent = text.value;
  li.addEventListener('click', line.bind(li));
  li.addEventListener('mouseover', showdlt)
  li.addEventListener('mouseout', hidedlt)
  btn(li);
};

function line(){
  this.classList.toggle('line');
}

function btn(x){
  const newbtn = document.createElement('button');
 const dltbtn= x.appendChild(newbtn);
 dltbtn.textContent = 'Delete';
 dltbtn.classList.add('delete');
 dltbtn.addEventListener('click', dltNow.bind(null, x))
}

function dltNow(y){
  y.remove(this)
};

function showdlt(){
  
}