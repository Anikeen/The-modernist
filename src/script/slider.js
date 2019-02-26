var prev_btn = document.querySelector('.leftArrow');
var next_btn = document.querySelector('.rightArrow');

var i = 0;

var image = document.querySelectorAll('.slide');

prev_btn.onclick = function(){
    image[i].className = 'slide viewedLeft';
    i--;
    if(i < 0){
        i = 0;        
    }
    image[i].className = 'slide showed';
}

next_btn.onclick = function(){
    image[i].className = 'slide viewedRight';
    i++;
    if(i >= image.length){
        i = image.length -1;        
    }
    image[i].className = 'slide showed';
}