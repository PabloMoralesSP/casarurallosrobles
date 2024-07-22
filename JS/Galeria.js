	

// CODIGO PARA LA GALERIA

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentIndex = 0;
	const images = document.querySelectorAll('.lightbox-gallery img'); // Suponiendo que las imágenes están dentro de un contenedor con clase 'gallery'

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].alt;
        lightbox.style.display = 'block';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            showLightbox(index);
        });
    });

    closeBtn.addEventListener('click', hideLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
});
