let screen = document.getElementById("screen");
let result;
let typeNum = (id) => {
  let num = document.getElementById(`${id}`).innerHTML;
  if (screen.innerHTML == result) {
    screen.innerHTML = num;
  } else {
    if (num == "." && screen.innerHTML == 0) {
      screen.innerHTML = "0.";
    } else {
      if (screen.innerHTML == "0") {
        screen.innerHTML = num;
      } else screen.innerHTML += num;
    }
  }
};

let delNum = () => {
  if (screen.innerHTML.length == 1) {
    screen.innerHTML = 0;
  } else screen.innerHTML = screen.innerHTML.slice(0, -1);
};
let op;
let num1;
let num2;
let operate = (id) => {
  num1 = parseFloat(screen.innerHTML);
  op = id;
  screen.innerHTML = 0;
};

let equal = () => {
  num2 = parseFloat(screen.innerHTML);
  switch (op) {
    case "+":
      result = num1 + num2;
      screen.innerHTML = result;
      break;
    case "-":
      result = num1 - num2;
      screen.innerHTML = result;
      break;
    case "x":
      result = num1 * num2;
      screen.innerHTML = result;
      break;
    case "/":
      result = num1 / num2;
      screen.innerHTML = result;
      break;
    default:
      break;
  }
};
let reset = () => {
  screen.innerHTML = 0;
};
