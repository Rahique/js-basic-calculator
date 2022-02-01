let inOne = document.getElementById("input_one");
let inTwo = document.getElementById("input_two");
let result = document.querySelector(".result");

plus = () => {
  let x = inOne.value;
  let y = inTwo.value;
  result.innerHTML = parseInt(x) + parseInt(y);
};
minus = () => {
  let x = inOne.value;
  let y = inTwo.value;
  result.innerHTML = parseInt(x) - parseInt(y);
};
multiply = () => {
  let x = inOne.value;
  let y = inTwo.value;
  result.innerHTML = parseInt(x) * parseInt(y);
};
divide = () => {
  let x = inOne.value;
  let y = inTwo.value;
  result.innerHTML = parseInt(x) / parseInt(y);
};
