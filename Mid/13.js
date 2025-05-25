//تابعی که آرایه ای از اعداد را گرفته و بزرگ ترین عدد را پیدا کند
let array = [1,2,3,4];
function mximom(arr) {
    let mx = arr[0];
    for (const num of arr) if (num > mx) mx = num;
    return mx;
}
