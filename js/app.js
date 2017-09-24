window.addEventListener('DOMContentLoaded', function(event) {
    //slider header
    var index = -1;
    var imageBox = document.getElementById('image-box');
    var listImage = imageBox.querySelector('.list-image');

    function handerPositionImage(n) {
        index = index + n;
        if (index > 2) {
            index = 0;
        } else {
            if (index < 0) {
                index = 2;
            }
        }
    }

    function slideImage(n) {
        handerPositionImage(n);
        listImage.style.transition = 'transform 1s ease';
        listImage.style.transform = 'translateX(' + index * -1200 + 'px)';
    }

    function controlSlide() {
        slideImage(1);
        setTimeout(controlSlide, 6000);
    }
    controlSlide();
});