const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');

const convertToRoman = (decimal) => {
  const romanNumbers = [
    'I',
    'IV',
    'V',
    'IV',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
  ];
  const decimalNumbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  if (decimal === '') {
    result.innerText = 'Please enter a valid number';
    result.classList.remove('hide');
    setTimeout(() => {
      result.classList.add('hide');
    }, 2000);
    return;
  }
  const num = parseInt(decimal, 10);

  if (num < 1 || isNaN(num)) {
    result.innerText = 'Please enter a number greater than or equal to 1';
    result.classList.remove('hide');
    setTimeout(() => {
      result.classList.add('hide');
    }, 2000);
    return;
  }
  if (num > 3999) {
    result.innerText = 'Please enter a number less than or equal to 3999';
    result.classList.remove('hide');
    setTimeout(() => {
      result.classList.add('hide');
    }, 2000);
    return;
  }

  let romanNumber = '';
  for (let i = decimalNumbers.length - 1; i >= 0; i--) {
    while (decimal >= decimalNumbers[i]) {
      romanNumber += romanNumbers[i];
      decimal -= decimalNumbers[i];
    }
  }

  result.innerText = romanNumber;
  result.classList.remove('hide');
};

const isClickOrKeyPressed = () => {
  convertToRoman(inputNumber.value);
};

convertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isClickOrKeyPressed();
});

inputNumber.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    isClickOrKeyPressed();
  }
});
