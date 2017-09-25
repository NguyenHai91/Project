window.addEventListener('DOMContentLoaded', function(event) {
    //slider header
    var index = -1;
    var imageBox = document.getElementById('image-box');
    var listImage = imageBox.querySelector('.list-image');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

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

    function plusIndex(n) {
        handerPositionImage(n);
        listImage.style.transition = 'transform 0.2s ease';
        listImage.style.transform = 'translateX(' + index * -1200 + 'px)';
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
    prev.addEventListener('click', function() {
        plusIndex(-1);
    });
    next.addEventListener('click', function() {
        plusIndex(1);
    });
    controlSlide();

    //slide feature
    var indexFeature = -1;
    var featureBox = document.getElementById('feature-box');
    var listImageFeature = featureBox.querySelector('.list-image');

    function handlerPositionFeater(n) {
        indexFeature = indexFeature + n;
        if (indexFeature < 0) {
            indexFeature = 2;
        } else {
            if (indexFeature > 2) {
                indexFeature = 0;
            }
        }
    }

    function slideFeature(n) {
        handlerPositionFeater(n);
        listImageFeature.style.transition = 'transform 1s ease';
        listImageFeature.style.transform = 'translateX(' + index * -1200 + 'px)';
    }

    function controlSlideFeature() {
        slideFeature(1);
        console.log(indexFeature);
        setTimeout(controlSlideFeature, 6000);
    }
    controlSlideFeature();
});