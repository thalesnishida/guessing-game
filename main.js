const btn = document.querySelector('#btn');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let xAttemps = 1;
let rondanNumber = Math.round(Math.random() * 10);


btn.addEventListener('click', handleTry);
document.addEventListener('keydown',keyDown )
btnReset.addEventListener('click', handleAgain);




function keyDown(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleToggle();
  }
}


function handleTry(event){
  event.preventDefault();
  const inputNumber = document.querySelector('#inputNumber');

  if(Number(inputNumber.value) > 10){
    alert("SOMENTE NÚMEROS ENTRE 0 A 10")
  } else if (Number(inputNumber.value) < 0){
    alert("SOMENTE NÚMEROS ENTRE 0 A 10")
  }
  if(Number(inputNumber.value) == rondanNumber){
    handleToggle()
    screen2.querySelector('h2').innerText = `Acertou em ${xAttemps} tentativas`;
  }
  
  inputNumber.value = ""
  xAttemps++

}

function handleAgain(){
  handleToggle();
  rondanNumber = Math.round(Math.random() * 10);
}

function handleToggle(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

