const rato = document.querySelector('.rato');
const pipe = document.querySelector('.pipe');

const jump = () => {
    rato.classList.add('jump');
    
    setTimeout(() => {
        rato.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const ratoPosition = +window.getComputedStyle(rato).bottom.replace('px', '');

    console.log(ratoPosition);

    if (pipePosition <= 120 && pipePosition > 0 &&  ratoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        rato.style.animation = 'none';
        rato.style.bottom = `${ratoPosition}px`;

        rato.src = './images/ratomorreu.webp';
        rato.style.width = '150px'
        rato.style.maginLeft = '50px'

        clearInterval(loop);
    }
    
    
    
}, 10);

document.addEventListener('keydown', jump);