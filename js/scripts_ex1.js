//Arrow functions
  // 1
const sum = (valueA, valueB) => {
    const result = valueA + valueB
    document.getElementById("result").innerHTML = `The result is == ${result}`;
  
    if (isNaN(valueA) || isNaN(valueB)) {
      document.getElementById("result").innerHTML = "Invalid numbers inputed";
    }
  }
  
  function calcularSuma() {
    let sum1 = Number(document.getElementById("suma1").value);
    let sum2 = Number(document.getElementById("suma2").value);

    total = sum1 + sum2;

    console.log(total);

    document.getElementById("small-input").value = total;

}
  
  // 2
  const randomNumber = () => {
    const rand = Math.floor(Math.random() * 100);
    document.getElementById("random-output").value = `${rand}`;
  }
  
  // 3
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet (){
      if (!this.name.trim()){
        document.getElementById("saludar-output").value = "Nom invàlid afegit";
      }
      else {
        document.getElementById("saludar-output").value = `Bon dia ${this.name}!`;
      }
    }
  }
  
  const saludar = () => {
    const inputName = document.getElementById("saludar-input").value;
    const person = new Person(inputName);
  
    person.greet();
  }
  
  // 4
  const printNumbers = (arrayNum) => {
    let string = "";
    
    arrayNum.forEach(element => {
      string += element + " ";
      console.log(element);
    });
  
    document.getElementById("array-output").value = `${string}`;
  }
  
  const ArrayInput = () => {
    const input = document.getElementById("array-input").value;
    const arr = input.split(/[\s,]+/).map(num => parseFloat(num.trim()));
    printNumbers(arr);
  }
  
  // 5
  const printMessage = () => {
    const countdown = document.getElementById("countdown");
      countdown.textContent = "3";
      setTimeout(() => {
        countdown.textContent = "2";
      },1000);

      setTimeout(() => {
        countdown.textContent = "1";
      },2000);

      setTimeout(() => {
        countdown.textContent = "";
      },3000);
      
    setTimeout(() => {
      const inputMessage = document.getElementById("message-input").value;
      document.getElementById("message-output").value = inputMessage;
      console.log(inputMessage)
      }, "3000");
  }
