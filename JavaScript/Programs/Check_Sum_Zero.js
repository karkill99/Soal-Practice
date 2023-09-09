

// Check Sum Zero O(n^2)
let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

let res = checkSum(arr);
console.log(res);

// *************************************************

// Check Sum Zero O(n) optimized

function findSum(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > 0) {
      right--;
    } else if (sum === 0) {
      return [arr[left], arr[right]];
    } else {
      left++;
    }
  }
}

let result = findSum(arr);
console.log(result);
