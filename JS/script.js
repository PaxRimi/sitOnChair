// Add 2 img from html file
const imgs = document.querySelectorAll('.gallery__Img');

// Add prev and next button
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Add slider img list
const sliderImgs = document.querySelectorAll('.main__img li');
// Add list of arrows from drop down list
const arrowList = document.querySelectorAll('.list_arrow');
// Add list of element to choose
// type
const typeElements = document.querySelectorAll('.list_panel-title li');
//color
const elementColors = document.querySelectorAll('.list_panel-color li');
//pattern
const elementPatterns = document.querySelectorAll('.list_panel-pattern li');
//transport
const checkBoxTransport = document.getElementById('transport');
//Add table elements to count the price
const title = document.getElementById('title');
const color = document.getElementById('color');
const pattern = document.getElementById('pattern');
const transport = document.getElementById('checkTransport');
const titleValue = document.getElementById('titleValue');
const colorValue = document.getElementById('colorValue');
const patternValue = document.getElementById('patternValue');
const transportValue = document.getElementById('transportValue');
// Add elements that sum the price
const sum = document.getElementById('sum');
console.log(sum);


//number of showing ul element
let number = 0;

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

// function showing drop down list with element to buy

arrowList.forEach(function (element) {
   element.addEventListener('click', function(e){
      this.nextElementSibling.classList.toggle('show');
   });
});

typeElements.forEach(function(element){
    element.addEventListener('click', function (e) {
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
        this.parentElement.parentElement.firstElementChild.style.color = "black";
        this.parentElement.classList.toggle('show');
        title.innerText = this.innerText;
        titleValue.innerText = this.dataset.price;
        orderSum();
    });
});

elementColors.forEach(function(element){
    element.addEventListener('click', function (e) {
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
        this.parentElement.parentElement.firstElementChild.style.color = "black";
        this.parentElement.classList.toggle('show');
        color.innerText = this.innerText;
        colorValue.innerText = this.dataset.price;
        orderSum();
    });
});

elementPatterns.forEach(function(element){
    element.addEventListener('click', function (e) {
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
        this.parentElement.parentElement.firstElementChild.style.color = "black";
        this.parentElement.classList.toggle('show');
        pattern.innerText = this.innerText;
        patternValue.innerText = this.dataset.price;
        orderSum();
    });
});


checkBoxTransport.addEventListener('change', function (e) {
    if (this.checked) {
        transport.innerText = "Transport";
        transportValue.innerText = this.dataset.price;
        orderSum();
    } else {
        transport.innerText = "";
        transportValue.innerText = "";
        orderSum();
    }
});

function orderSum() {
    sum.innerText = Number(titleValue.innerText) + Number(colorValue.innerText) + Number(patternValue.innerText) + Number(transportValue.innerText)
}