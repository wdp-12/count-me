function countMe(arr) {
  // Inisialisasi object untuk menyimpan hasil perhitungan
  let result = {};

  // Loop melalui elemen-elemen dalam array
  while (arr.length > 0) {
    // Ambil elemen pertama dari array
    let current = arr.shift();

    // Periksa apakah elemen tersebut sudah ada dalam object hasil
    if (result[current]) {
      // Jika sudah ada, tambahkan 1 ke nilai yang ada
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
