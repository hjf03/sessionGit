// با بریک و کانتینیو اعداد زوج بین 1 تا 10 را چاپ کن
for(i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i)
    }
    if (i == 10){
        break
    }
    else{
        continue
    }
}