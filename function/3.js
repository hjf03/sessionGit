function func(str) {
    let revrs = '';
    let s = str.length;
    for (let i = s - 1; i >= 0; i--) {
        revrs += str[i];
    }
    return revrs;
}

const test = "Hannane";
console.log(func(test));