
if (canvas.classList.contains('grid-mode')) {
    document.querySelectorAll('.postcard').forEach(card => {
        const smallRotate = (Math.random() - 0.5) * 2; 
        card.style.transform = `rotate(${smallRotate}deg)`;
    });
}