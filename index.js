function countMe(arr) {
  // Membuat objek kosong untuk menyimpan hasil perhitungan
  const objek = {};

 
  for (let i = 0; i < arr.length; i++) {
    const Value = arr[i];

    // Jika nilai sudah ada dalam objek, tambahkan 1 ke nilai tersebut
    if (objek[Value]) {
      objek[Value] += 1;
    } else {
      // Jika nilai belum ada dalam objek, buat kunci baru dengan nilai 1
      objek[Value] = 1;
    }
  }

  // Mengembalikan objek hasil perhitungan
  return objek;
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// Output: { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));
// Output: { '1': 2, '15': 2, '9': 1, '10': 2, '8': 1, '12': 1, '3': 1 }
