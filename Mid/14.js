//تابعی که یک رشته بگیرد و معکوس آن را برگرداند
const test = "Hannane";
function func(str) {
    let revrs = '';
    let s = str.length;
    for (let i = s - 1; i >= 0; i--) {
        revrs += str[i];
    }
    return revrs;
}
