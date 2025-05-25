//تعداد اعداد زوج و فرد را شمارش کنید
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let zoj = 0;
let fard = 0;
for (let num of numbers){
    if (num % 2 == 0){
        zoj += 1;
    }
    else{
        fard += 1;
    }
}