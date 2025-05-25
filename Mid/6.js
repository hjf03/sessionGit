// اولین عددی که بزرگتر از مقدار تریشولد است را در ارایه پیدا کن
let numbers = [1, 3, 7, 8, 5, 10];
let threshold = 6;
let end = 0;
for(let num of numbers){
    if (num >= threshold){
        end = end + num;
        break;
    }
    else{
        continue;
    }
}