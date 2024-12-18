let a = parseInt(prompt("enter your num1"));
let b = parseInt(prompt("enter your num2"));
let c = prompt("+, -, *, /");

// let ans = parseInt(a, b, c);

switch (c) {
  case "+": {
    console.log(a + b);
    break;
  }
  case "-": {
    console.log(a - b);
    break;
  }
  case "*": {
    console.log(a * b);
    break;
  }
  case "/": {
    console.log(a / b);
    break;
  }
  default: {
    console.log("invalid");
    break;
  }
}
