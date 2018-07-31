// Add 2 img from html file
var imgs = document.querySelectorAll('.gallery__Img');

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