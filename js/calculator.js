let calculation = localStorage.getItem('calculation') || '';
console.log();
function updateCalculation(arg){
  calculation += arg;
  localStorage.setItem('calculation',calculation);
  document.querySelector('.calculation').innerHTML = calculation;
  return calculation;
  
}
function cal(){
  calculation = eval(calculation);
  localStorage.setItem('calculation',calculation);
  document.querySelector('.calculation').innerHTML = calculation;
}
function calclear(){
  console.log('remove');
  calculation = '';
  document.querySelector('.calculation').innerHTML = calculation;
  localStorage.removeItem(calculation);
}