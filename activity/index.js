while (true) {
  const userInput = prompt("Please enter a positive integer:");
  
  // Check if the user input is valid
  if (userInput === null) {
    console.log("User cancelled input.");
    break;
  } else if (!Number.isInteger(Number(userInput)) || Number(userInput) <= 0) {
    // Handle case where user input is not a positive integer
    alert("Invalid input. Please enter a valid positive integer.");
    continue;
  }
  
  const num = Number(userInput);
  
  let fibSeq = [0, 1];
  for (let i = 2; fibSeq[i-1] + fibSeq[i-2] <= num; i++) {
    const fibNum = fibSeq[i-1] + fibSeq[i-2];
    fibSeq.push(fibNum);
  }
  
  const isFibNum = fibSeq.includes(num);

  if (isFibNum) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is not a Fibonacci number.`);
  }
  
  break;
}