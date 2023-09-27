function checkNumberSign(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  // Example usage:
  const inputNumber = 42;
  const sign = checkNumberSign(inputNumber);
  console.log(`The number ${inputNumber} is ${sign}.`);
  