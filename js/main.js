let screen = document.getElementById("screen");
let result;
let typeNum = (id) => {
  let num = document.getElementById(`${id}`).innerHTML;
  if (screen.innerHTML.length == 14) {
  } else {
    if (screen.innerHTML == result) {
      screen.innerHTML = num;
    } else if (
      (screen.innerHTML == "0." && id == ".") ||
      (screen.innerHTML == "." && id == ".")
    ) {
      screen.innerHTML = "0.";
    } else if (screen.innerHTML[1] == "." && num == ".") {
      screen.innerHTML = screen.innerHTML;
    } else {
      if (num == "." && screen.innerHTML == 0) {
        screen.innerHTML = "0.";
      } else {
        if (screen.innerHTML == "0") {
          screen.innerHTML = num;
        } else screen.innerHTML += num;
      }
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
let ball1 = document.getElementById("normal");
let ball2 = document.getElementById("light");
let ball3 = document.getElementById("dark");
let light = document.querySelectorAll(".light");
let dark = document.querySelectorAll(".dark");

let resetTheme = () => {
  for (let i = 0; i < light.length; i++) {
    light[i].classList.remove("light");
  }
  for (let i = 0; i < light.length; i++) {
    dark[i].classList.remove("dark");
  }
};
resetTheme();

let changeTheme = (id) => {
  if (id == "normal") {
    for (let i = 0; i < light.length; i++) {
      light[i].classList.remove("light");
    }
    for (let i = 0; i < light.length; i++) {
      dark[i].classList.remove("dark");
    }
    ball1.classList.add("orange");
  }
  if (id == "light") {
    for (let i = 0; i < light.length; i++) {
      light[i].classList.add("light");
    }
    for (let i = 0; i < light.length; i++) {
      dark[i].classList.remove("dark");
    }
    ball1.classList.remove("orange");
  }
  if (id == "dark") {
    for (let i = 0; i < light.length; i++) {
      dark[i].classList.add("dark");
    }
    for (let i = 0; i < light.length; i++) {
      light[i].classList.remove("light");
    }
    ball1.classList.remove("orange");
  }
};
