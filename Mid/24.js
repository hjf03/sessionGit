// محاسبه فیبوناچی عدد
function fib(n){
    if (n==0) return 0;
    if (n==1) return 1;
    let fibArr = [0, 1];
    for (let i = 2; i <= n; i++){
        let nextI = fibArr[i-1] + fibArr[i-2];
        fibArr.push(nextI);
    }
    return fibArr;
}