
// 1 задание


var age = +prompt("Введите ваш возраст")
if (18 >= (age) && (age) >= 0) {
    alert("Вы еще молоды. Вам нужно учиться!")
}
else if ((age) > 18 && (age) <= 50) {
    alert("Вам нужно работать!");

}
else if (50 < (age) && 59 >= (age)) {
    alert("Вам скоро на пенсию!")
}
else if (59 < (age) && (age) <= 150) {
    alert('Вы пенсионер');
}
else {
    alert('Что-то пошло не так. Повтори заново!');
}


// 2 задание 

var a = +prompt("Введите число")
var b = +prompt("Введите число")
var c = +prompt("Введите число")

if ((b>a && b<c) || (b>c && b<a)) {
    alert(b);
}
else if  ((c>a && c<b) || (c>b && c<a)) {
    alert(c);
}
else if ((a>c && a<b) || (a>b && a<c)) {
    alert(a);
}
else{
    alert(NaN) 
}