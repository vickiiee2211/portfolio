const text = "I'm the web developer";
const skillbox1text = document.getElementById('skillbox1text');
let i = 0;

function type() {
    if(i < text.length){
        skillbox1text.innerHTML = text.slice(0, i +1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(type,100);
    } else {
        skillbox1text.innerHTML = text + '<span class="cursor">|</span>';
    }
    type();

    }