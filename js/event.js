document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------------
       BILDSPEL – MANUELLT (en bild i taget)
    -------------------------------------- */
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (slides && nextBtn && prevBtn && images.length > 0) {
        let index = 0;

        function showSlide() {
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % images.length;
            showSlide();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            showSlide();
        });
    }

});