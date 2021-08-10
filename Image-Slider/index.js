let i = 0;
let images = [];
let time = 2000;

images[0] = 'images/google.jpeg';
images[1] = 'images/go.jpeg';
images[2] = 'images/g.jpeg';
images[3] = 'images/bg.jpg';

function changeImg () {
    document.slide.src = images[i];
    

    if( i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout('changeImg()',time)
}

window.onload = changeImg;


