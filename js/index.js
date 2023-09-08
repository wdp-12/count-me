function countMe(arr) {
  // Inisialisasi object u/ save result perhitungan
  let result = {};

  while (arr.length > 0) {
  
    let current = arr.shift(); // Pake .shift() u/ ambil elemen 1 dari array

    // Periksa elemen sudah ada dalam result belum?
    if (result[current]) {
      // Jika sudah ada, tambah 1 ke nilai yang ada
      result[current] += 1;
    } else {
      // Jika belum ada, inisialisasi dengan 1
      result[current] = 1;
    }
  }

  return result;
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// Output: { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));
// Output: { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }
