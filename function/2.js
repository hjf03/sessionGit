function mximom(arr) {
    let mx = arr[0];
    for (const num of arr) if (num > mx) mx = num;
    return mx;
}

const test = [3, 5, 9, 2];
console.log(mximom(test));