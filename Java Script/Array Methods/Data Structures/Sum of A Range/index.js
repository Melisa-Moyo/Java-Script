function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  alert(range(1, 10));
  alert(range(5, 2, -1));
  alert(sum(range(1, 10)));
  