'use strict';
/* N.30 Домашнее задание DRAGNDROP
Реализовать на JavaScript перетаскивание мышью по веб-странице нескольких любых
(но не мелких) изображений. Обрабатывать как минимум события mousedown, mousemove, mouseup. 
Изображения должны «таскаться» мышью за любую точку (т.е. и при «взятии» и при «отпускании» изображение смещаться не должно, оно должно смещаться только при смещении мыши при нажатой левой кнопке, ровно настолько, насколько смещена мышь). 
Код не должен зависеть от количества картинок (т.е. код должен сам найти все картинки, находящиеся в указанном div-контейнере). 
Картинки изначально НЕ должны быть спозиционированы (стилевое свойство position не должно быть задано). 
Когда начинается перетаскивание какой-либо картинки, остальные картинки не должны сдвигаться. 
Картинка, перетаскивание которой началось, должна оказываться выше (ближе к глазам), чем остальные. 
На время перетаскивания менять форму курсора на подходящую. */

var ball = document.getElementById('ball');

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
//var shiftX = e.pageX - getCoords(ball).left;
//var shiftY = e.pageY - getCoords(ball).top;


ball.onmousedown = function(e) {
    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 3;
    document.body.appendChild(ball);
    moveAt(e);

    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;

    }
}
ball.ondragstart = function() {
    return false;
};