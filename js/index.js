document.addEventListener("DOMContentLoaded", () => {
    /* --------------------------------------
     HERO-BILDSPEL – AUTOMATISKT
     -------------------------------------- */
    const heroSlides = document.querySelectorAll(".hero-slideshow img");
    if (heroSlides.length > 0) {
        let heroIndex = 0;

        function showNextHeroSlide() {
            heroSlides[heroIndex].classList.remove("active");
            heroIndex = (heroIndex + 1) % heroSlides.length;
            heroSlides[heroIndex].classList.add("active");
        }

        setInterval(showNextHeroSlide, 5000); // byt var 5:e sekund
    }

    /* --------------------------------------
     FLERA HORIZONTELLA BILDGALLERIER
    -------------------------------------- */
    const galleries = document.querySelectorAll('.bildgalleri-wrapper');

    galleries.forEach(wrapper => {
        const gallery = wrapper.querySelector('.bildgalleri-scroll');
        const galleryPrev = wrapper.querySelector('.gallery-prev');
        const galleryNext = wrapper.querySelector('.gallery-next');

        if (gallery && galleryPrev && galleryNext) {

            function updateGalleryButtons() {
                const scrollLeft = gallery.scrollLeft;
                const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

                if (scrollLeft <= 5) {
                    galleryPrev.classList.add('arrow-hidden');
                } else {
                    galleryPrev.classList.remove('arrow-hidden');
                }

                if (scrollLeft >= maxScrollLeft - 5) {
                    galleryNext.classList.add('arrow-hidden');
                } else {
                    galleryNext.classList.remove('arrow-hidden');
                }
            }

            galleryNext.addEventListener('click', () => {
                gallery.scrollBy({ left: 300, behavior: 'smooth' });
            });

            galleryPrev.addEventListener('click', () => {
                gallery.scrollBy({ left: -300, behavior: 'smooth' });
            });

            gallery.addEventListener('scroll', updateGalleryButtons);
            window.addEventListener('resize', updateGalleryButtons);
            updateGalleryButtons();
        }
    });

    /* --------------------------------------
     BILDSPEL – AUTOMATISKT HERO-IMG-TEXT-SECTION
    -------------------------------------- */
    const imgSlides = document.querySelectorAll(".slideshow img");
    if (imgSlides.length > 0) {
        let imgIndex = 0;

        function showNextHeroSlide() {
            imgSlides[imgIndex].classList.remove("active");
            imgIndex = (imgIndex + 1) % imgSlides.length;
            imgSlides[imgIndex].classList.add("active");
        }

        setInterval(showNextHeroSlide, 5000); // byt var 5:e sekund
    }


    /* --------------------------------------
    RADIO-FÄLT I FORMULÄR
     -------------------------------------- */
    const mealRadios = document.querySelectorAll('input[name="meal"]');
    const lunchFields = document.querySelectorAll('.field-item.lunch');
    const afternoonTeaFields = document.querySelectorAll('.field-item.afternoon-tea');
    const dinnerFields = document.querySelectorAll('.field-item.dinner');

    // Funktion som visar rätt fält
    function showMealFields(selectedMeal) {
        // Dölj alla
        lunchFields.forEach(f => f.classList.add('radio-hidden'));
        afternoonTeaFields.forEach(f => f.classList.add('radio-hidden'));
        dinnerFields.forEach(f => f.classList.add('radio-hidden'));

        // Visa de valda
        if (selectedMeal === 'lunch') {
            lunchFields.forEach(f => f.classList.remove('radio-hidden'));
        } else if (selectedMeal === 'afternoon-tea') {
            afternoonTeaFields.forEach(f => f.classList.remove('radio-hidden'));
        } else if (selectedMeal === 'dinner') {
            dinnerFields.forEach(f => f.classList.remove('radio-hidden'));
        }
    }

    // Sätt standard (Lunch)
    showMealFields('lunch');

    // Lyssna på ändringar
    mealRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            showMealFields(radio.value);
        });
    });
});