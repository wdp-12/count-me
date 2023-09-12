function countMe(arr) {
    let hasil = {}

    while (arr.length > 0) {
        let n = arr.shift();

        if (hasil[n]) {
            hasil[n] += 1;
        } else {
            hasil[n] = 1;
        }
    }

    return hasil;
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// Output: { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// Output: { '1': 2, '15': 2, '9': 1, '10': 2, '8': 1, '12': 1, '3': 1 }
