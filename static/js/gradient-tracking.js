
const btns = document.querySelectorAll('.mouse-cursor-gradient-tracking')

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mousemove', e => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        btns[i].style.setProperty('--x', x + 'px');
        btns[i].style.setProperty('--y', y + 'px');
    })
}
