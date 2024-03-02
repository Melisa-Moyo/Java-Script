//  Is "else" required?
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm('Did parents allow you?');
  }
  
  // Rewrite the function using '?' or '||'
  function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
  }
  
  function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?');
  }
  
  // Function min(a, b)
  function min(a, b) {
    return a < b ? a : b;
  }
  
  // Function pow(x,n)
  function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  let x = +prompt("Enter the base (x):", "");
  let n = +prompt("Enter the exponent (n):", "");
  
  if (n < 1 || !Number.isInteger(n)) {
    alert("Please enter a positive integer for the exponent.");
  } else {
    alert(`The result of ${x}^${n} is: ${pow(x, n)}`);
  }
  