function findLargestElement(arr) {
    // Check if the input array is empty
    if (arr.length === 0) {
      return "The array is empty.";
    }
  
    // Initialize a variable to store the maximum value
    let max = arr[0]; // Assume the first element is the maximum initially
  
    // Iterate through the array to find the maximum element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max if a larger element is found
      }
    }
  
    return max;
  }
  
  // Example usage:
  const numbers = [12, 45, 67, 23, 9, 56, 89];
  const largest = findLargestElement(numbers);
  console.log(`The largest element in the array is: ${largest}`);
  