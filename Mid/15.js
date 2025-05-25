//تابعی بنویسید که یک آبجکت به عنوان ورودی دریافت کند و کلید ها و مقادیر آن را جا به جا کند
const test = {ali:25 , sara:13};
function func(obj) {
    const a = {};
    for (const key in obj) {
        a[obj[key]] = key;
    }
    return a;
}
