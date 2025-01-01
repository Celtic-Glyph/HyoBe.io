document.addEventListener('mousemove', (event) => {
    // Get the position of the mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Get the blurry ball element
    const blurryBall = document.querySelector('.blurry-ball');
    
    // Update the position of the blurry ball
    blurryBall.style.left = `${mouseX - blurryBall.offsetWidth / 2}px`;
    blurryBall.style.top = `${mouseY - blurryBall.offsetHeight / 2}px`;
});
