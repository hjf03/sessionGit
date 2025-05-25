// اعداد 1 تا 10 را چاپ کن اگر به 6 رسید متوقف شو
for (i = 0; i <= 10; i++){
    if (i != 6){
        console.log(i)
        continue;
    }
    else{
        break;
    }
}