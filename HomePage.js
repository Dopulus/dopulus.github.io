document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width;

    // Clonare le immagini inizialmente per riempire lo spazio
    images.forEach(image => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollAmount = 0;
    function animate() {
        scrollAmount -= 1;
        if (scrollAmount <= -imageWidth) {
            // Rimuovere la prima immagine e aggiungerla alla fine
            const firstImage = track.children[0];
            track.appendChild(firstImage);
            scrollAmount += imageWidth;
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});