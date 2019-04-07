
if (screen.width <= 992){
    
    var element = document.getElementsByClassName('tab-pane');
    var i;

    for(i = 0 ; i < element.length ; i++){
        element[i].classList.add("show");
        element[i].classList.add("active");    
    }
    
}