// Add 2 img from html file
var imgs = document.querySelectorAll('.gallery__Img');

// Add prev and next button
var prev = document.getElementById('prev');
var next = document.getElementById('next');

// Add slider img list
var sliderImgs = document.querySelectorAll('.main__img li');
console.log(sliderImgs);

//number of showing ul element
var number = 0;

// At the start show firs element
sliderImgs[number].classList.add('visible');

// function that remove text from img after hover on them

imgs.forEach(function (element) {
    element.addEventListener('mouseover', function (e) {
        this.firstElementChild.classList.add('hidden');
    })
});

imgs.forEach(function (element) {
    element.addEventListener('mouseout', function (e) {
        this.firstElementChild.classList.remove('hidden');
    })
});

// Function that show next img

next.addEventListener('click', function () {
    sliderImgs[number].classList.remove('visible');
    number++;
    if (number === sliderImgs.length) {
        number = 0;
    }
    sliderImgs[number].classList.add('visible');
});

// Function that show previous img

prev.addEventListener('click', function () {
    sliderImgs[number].classList.remove('visible');
    number--;
    if (number < 0) {
        number = (sliderImgs.length-1);
    }
    sliderImgs[number].classList.add('visible');
});
