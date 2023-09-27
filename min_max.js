function getRandomNumber(min, max) {
    if (min >= max) {
      return "Invalid input. The minimum value must be less than the maximum value.";
    }
  
    // Calculate the range of values
    const range = max - min;
  
    // Generate a random number within the range and add it to the minimum value
    const randomNumber = min + Math.random() * range;
  
    return randomNumber;
  }
  
  // Example usage:
  const min = 1;
  const max = 100;
  const randomNum = getRandomNumber(min, max);
  console.log(`Random number between ${min} and ${max}: ${randomNum}`);
  