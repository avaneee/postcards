const btn = document.getElementById('toggleBtn');
const canvas = document.getElementById('canvas');

btn.addEventListener('click', () => {
    if (canvas.classList.contains('pile-mode')) {
        // Transition to Grid
        canvas.classList.remove('pile-mode');
        canvas.classList.add('grid-mode');
        btn.textContent = "Scatter Collection";
    } else {
        // Transition to Pile
        canvas.classList.remove('grid-mode');
        canvas.classList.add('pile-mode');
        btn.textContent = "Organize Collection";
    }
});

// Optional: Randomize the pile even more on load
document.querySelectorAll('.postcard').forEach(card => {
    const randomRot = Math.floor(Math.random() * 40) - 20; // -20 to 20 deg
    const randomX = Math.floor(Math.random() * 40) - 20;   // -20 to 20 px
    const randomY = Math.floor(Math.random() * 40) - 20;
    
    card.style.setProperty('--rand-r', `${randomRot}deg`);
    card.style.setProperty('--rand-x', `${randomX}px`);
    card.style.setProperty('--rand-y', `${randomY}px`);
});