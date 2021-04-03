let right = document.querySelector(".right");
let left = document.querySelector(".left");
let container = document.querySelector(".container");

left.addEventListener('mouseenter', () => container.classList.add('hover_left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover_left'))

right.addEventListener('mouseenter', () => container.classList.add('hover_right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover_right'))