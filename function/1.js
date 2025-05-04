function cal(numbrs) {
    let sum = 0;
    let n = numbrs.length;
    for (let i = 0; i < n; i++) {
        sum += numbrs[i];
    }
    return sum / n;
}

const test = [1, 3, 6, 8];
console.log(cal(test));