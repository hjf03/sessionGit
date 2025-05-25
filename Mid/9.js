//قطعه کدی بنویسید فیبوناچی یک عدد را به صورت آرایه ذخیره و نمایش دهد
let fib = 5;
let fibArr = [0, 1];
for (let i = 2; i <= fib; i++){
    let nex = fibArr[i-1] + fibArr[i-2];
    fibArr.push(nex);
}