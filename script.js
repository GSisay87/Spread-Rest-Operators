

//2.Write a program that prompts the user to enter an array of numbers and
//then passes the array to a function called calculateAverage. The function
//should calculate the average of the numbers using the rest operator and
//return the result. Then, output the result to the console.

function calculateAverage(...numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    return avg;
  }
  
  const input = prompt("Enter an array of numbers separated by commas:");
  const numbers = input.split(",").map((str) => Number(str.trim()));
  const average = calculateAverage(...numbers);
  
  console.log(`The average of [${numbers}] is ${average}`);
  