let colors = colorArray(6);

  let randomGoal = Math.floor(Math.random() * 6);
  console.log(randomGoal);
  let goal = colors[randomGoal];


  const square = document.querySelectorAll('.square');
  const title = document.querySelector('h2');
  const result = document.querySelector('#result');
  const h1 = document.querySelector('h1');
  const trybtn = document.querySelector('#again');
  const hardbtn = document.querySelector('#hard');
  const easybtn = document.querySelector('#easy');

  trybtn.addEventListener('click', mode );
  hardbtn.addEventListener('click', hard);
  easybtn.addEventListener('click', easy);


for(let i = 0; i<square.length; i++){
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener('click', matchColor.bind(square[i]))
};

title.textContent = goal;

function matchColor(){
  if(this.style.backgroundColor === goal){win();} else{this.style.backgroundColor = 'black';
    lost();
  }
};

function win(){
  result.textContent ='You won';
  for(let color of square){
    color.style.backgroundColor =goal;
  }
  h1.style.backgroundColor = goal;
  trybtn.textContent = "play again";
};

function lost(){
  result.textContent = 'try again';
};

function colorArray(num){
  let array = [];
  for(i=0; i<num; i++){
    let r = rgb();
     let g = rgb();
      let b = rgb();
     newcolor= `rgb(${r}, ${g}, ${b})`;
      array.push(newcolor);
  }
  return array;
};

function rgb(){
  return Math.floor(Math.random() * 256);
};

function regenerate(n){
colors= colorArray(6);
  randomGoal = Math.floor(Math.random() * n);
goal = colors[randomGoal];
title.textContent = goal;
for (let i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];
}
trybtn.textContent = 'new colors';
result.textContent = '';
h1.style.backgroundColor = '';

};

function easy(){
  easybtn.classList.add('selected');
  hardbtn.classList.remove('selected');
for(let i=3; i<=5; i++){
  square[i].classList.add('none');
}
regenerate(3);

};
function hard(){
  hardbtn.classList.add('selected');
  easybtn.classList.remove('selected');
  for (let i = 3; i <= 5; i++) {
    square[i].classList.remove('none');
  }
  regenerate(6);
};

function mode(){
  if(easybtn.className === 'selected'){
    easy();
  } else{
    hard();
  }
};
