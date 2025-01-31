let backBtn = document.getElementById('back');
let nextBtn = document.getElementById("next");
let slider = document.querySelector('.slider');
let slide = 0;



backBtn.addEventListener('click', () => {
    slider.style.transform = `translateX(${slide * 120}%)`;
    slide++;
})

nextBtn.addEventListener('click', () => {
    slider.style.transform = `translateX(${slide * 120}%)`;
    slide--
})

 