//تابعی بنویسید که دو آبجکت به عنوان ورودی دریافت و آبجکت دوم را به طور کامل در آبجکت اول ادغام کند
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

function mrge(objc1, objc2) {
    var a = {};
    for (var key in objc1) {
        a[key] = objc1[key];
    }
    for (var key in objc2) {
        a[key] = objc2[key];
    }
    return a;
}