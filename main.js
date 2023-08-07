// ВОЗРАСТ

age  = +prompt("Введите возраст")

if(age >= 0 && age<18){
    alert("Вы еще молоды , вам нужно учиться")
}else if(age >= 18 && age < 50){
    alert("Вам нужно работать")
}else if(age >= 50 && age < 59){
    alert("Вам скоро на пенсия")
}else if(age >= 59 && age <= 100){
    alert("Скорее всего вы уже мертвы")
}else{
    alert("Что-то пошло не так")
}

// ВРЕМЯ

time = +prompt("Введите время")

if(time>=0 && time <= 6){
    alert(`${time}  часа ночи`)
}else if(time >=7 && time <= 10){
    alert(`${time} часов утра`)
}else if(time >= 11 && time <= 17){
    alert(`${time - 12} часа дня`)
}else if(time >= 18 && time <= 23){
    alert(`${time-12} часов вечера`)
}else{
    alert("Введи норм число,по братски *_* ")
}

// Среднее число

a = +prompt("Введите первое число")
b = +prompt("Введите второе число")
c = +prompt("Введите третье число")

if((a>b && a<c) || (a>c && a<b)){
    alert(a)
}else if((b>a && b<c) || (b>c && b<a)){
    alert(b)
}else if((c>a && c<b) || (c>b && c<a)){
    alert(c)
}else{
    alert("Ошибочка")
}