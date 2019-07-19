$(function() { 
    //фкнкция вызова формы обратной связи
    $('#callback').click(function(){
        //появление окна обратной связи
        $('#grey').fadeIn();
        $('#close').fadeIn();
        $('#grey').center();

        //выводим затемение страницы и делаем полупрозрачным
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });

    //функция закрытия окна
    $('#close, #fade').click(function() {
        $('#fade').fadeOut(function() {
            $('#fade').fadeOut();
            $('#close').fadeOut();
            $('#grey').fadeOut();
        });
    });
 
});

jQuery.fn.center = function () {
this.css("position","absolute");
this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
return this;
}