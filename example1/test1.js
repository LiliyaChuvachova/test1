var MySlider = document.getElementsByClassName('cover');
var currentPicture = 0;

function stop(){//стоп анимации
    for(var i=0; i<MySlider.length; i++){
        MySlider[i].style.animation="none";
    }
}

function show(){
    MySlider[currentPicture].className = 'show';//z-index 3
    MySlide[currentPicture-1].className = 'clear';//z-index 1  
}

function next(){
    stop();
    show();
}


































































