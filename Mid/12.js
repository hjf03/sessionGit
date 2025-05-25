//تابعی بنویس که آرایه ای از اعداد را گرفته و میانگین آن ها را برگرداند
let array = [1,2,3,4];
function mid(arr){
    let sum = 0;
    const tol = arr.length;
    for(let num of arr){
        sum = sum + num;
        mian = sum / tol
    }
    console.log(mian)
}