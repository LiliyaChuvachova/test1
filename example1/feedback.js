$(function() { 
    //фкнкция вызова формы обратной связи
    $('#callback').click(function(){
        //появление окна обратной связи
        $('#grey').fadeIn();
        $('#close').fadeIn();
        //$('#grey').center();

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
