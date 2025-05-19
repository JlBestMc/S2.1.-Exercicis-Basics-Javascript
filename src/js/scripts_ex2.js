//Ternary operator
// 1
const potConduir = (edat) => {
  const output = document.getElementById("edat-output");
  output.value = edat >= 18 ? "Pots conduir" : "No pots conduir";
};

const mostrarPotConduir = () => {
  const edatInput = document.getElementById("edat-input").value.trim();
  const edat = parseFloat(edatInput);
  const output = document.getElementById("edat-output");

  if (ageInput === "" || isNaN(edat)) {
    output.value = "Entrada invàlida, si us plau ingresa un número";
  } else {
    potConduir(edat);
  }
};
// 2
const isBigger = (numA, numB) => {
  var comparision = numA > numB ? `${numA} es més gran que ${numB}` : 
      numA != numB ? `${numB} es més gran que ${numA}` : `${numA} es igual a ${numB}`;

  document.getElementById("comparision-output").value = comparision;
}

const handleComparision = () => {
  const numA = parseFloat(document.getElementById("numA").value);
  const numB= parseFloat(document.getElementById("numB").value);

  if (isNaN(numA) || isNaN(numB)) {
    document.getElementById("comparision-output").value = "Entrada invàlida, si us plau ingresa un número als dos camps";
  }
  else {
    isBigger(numA, numB);
  }
}

// 3
const checkValueSign = (value) => {
  const _string = value > 0 ? `${value} is positive` : 
    value < 0 ? `${value} is negative` : `${value} is == 0`;
  
  document.getElementById("valueSign").innerHTML = _string;
}

const handleCheck = () => {
  const _value = parseFloat(document.getElementById("value").value);

  if (isNaN(_value)) {
    document.getElementById("valueSign").innerHTML = "Invalid input, please put a number";
  }
  else {
    checkValueSign(_value);
  }
}

const maxValue = (valueA, valueB, valueC) => {
  const _string = valueA > valueB ? `${valueA} is the bigger number` :
    valueB > valueC ? `${valueB} is the bigger number` : `${valueC} is the bigger number`;

  document.getElementById("max").innerHTML = _string;
}

const handle3wayInput = () => {
  const _valueA = parseFloat(document.getElementById("max-a").value);
  const _valueB = parseFloat(document.getElementById("max-b").value);
  const _valueC = parseFloat(document.getElementById("max-c").value);

  if (isNaN(_valueA) || isNaN(_valueB) || isNaN(_valueC)) {
    document.getElementById("max").innerHTML = "Invalid input, please put a number in the three fields";
  }
  else {
    maxValue(_valueA, _valueB, _valueC);
  }
}

// 4
const checkParityInArray = (array) => {
  var _string = "";
  
  if (array.some(isNaN)) {
    _string = "Invalid input, check that there are no issues on the field";
  }
  else {
    _string += "Parity checked: ";

    array.forEach(element => {
      if (!Number.isInteger(element)) {
        _string = "Invalid input, decimal numbers are not valid";
        return;
      }
      _string += (element % 2 == 0 ? "even" : "odd") + " ";
    });
  }

  document.getElementById("parity").innerHTML = _string;
}

const handleParityInput = () => {
  const input = document.getElementById("parityArray").value.trim();
  const _array = input.split(/[\s,]+/).map(num => parseFloat(num.trim()));
  checkParityInArray(_array);
}