function countMe(arr) {
  let hitung = {};

  for (let data of arr) {
    if (hitung[data]) {
      hitung[data] += 1;
    } else {
      hitung[data] = 1;
    }
  }

  return hitung;
}

console.log(countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }
