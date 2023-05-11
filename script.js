class Calculator {
    constructor() {
      this.result = 0;
      this.operator = "";
      this.input = document.getElementById("result");
      this.buttons = document.querySelectorAll("#buttons button");
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const value = event.target.value;
          this.handleInput(value);
        });
      });
    }
  
    handleInput(value) {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        this.operator = value;
        this.result = parseFloat(this.input.value);
        this.input.value = "";
      } else if (value === "=") {
        this.calculate();
      } else if (value === "c") {
        this.clear();
      } else {
        this.input.value += value;
      }
    }
  
    calculate() {
      const secondNumber = parseFloat(this.input.value);
      let result;
      switch (this.operator) {
        case "+":
          result = this.result + secondNumber;
          break;
        case "-":
          result = this.result - secondNumber;
          break;
        case "*":
          result = this.result * secondNumber;
          break;
        case "/":
          result = this.result / secondNumber;
          break;
      }
      this.input.value = result;
      this.operator = "";
    }
  
    clear() {
      this.result = 0;
      this.operator = "";
      this.input.value = "";
    }
  }
  
  const calculator = new Calculator();
  