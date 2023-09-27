function calculateRectangleArea(length, width) {
    // Check if either the length or width is not a positive number
    if (length <= 0 || width <= 0) {
      return "Invalid input. Both length and width must be positive numbers.";
    }
  
    // Calculate the area of the rectangle
    const area = length * width;
    return area;
  }
  
  // Example usage:
  const length = 5;
  const width = 8;
  const area = calculateRectangleArea(length, width);
  console.log(`The area of the rectangle is: ${area}`);
  