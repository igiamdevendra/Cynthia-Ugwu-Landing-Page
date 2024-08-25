const miniCircle = document.querySelector('.mini-circle');

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener('mousemove', (e) => {
    miniCircle.style.transform = `translate(${e.clientX}px,  ${e.clientY}px)`;
})


