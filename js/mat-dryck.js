document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------------
        HERO-BILDSPEL – AUTOMATISKT
     -------------------------------------- */
    const heroSlides = document.querySelectorAll(".hero-slideshow-mobile img");
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
    RADIO-FÄLT I FORMULÄR
     -------------------------------------- */
    // Hämta grupperna av fält
    const lunchFields = Array.from(document.querySelectorAll('.lunch'));
    const afternoonTeaFields = Array.from(document.querySelectorAll('.afternoon-tea'));
    const dinnerFields = Array.from(document.querySelectorAll('.dinner'));


    // Funktion som visar/döljer fält + hanterar required
    function handleFields(fields, shouldShow) {
        fields.forEach(field => {
            const input = field.querySelector('input, select, textarea');
            if (!input) return;

            if (shouldShow) {
                field.classList.remove('radio-hidden');   // Visa
                input.setAttribute('required', 'required'); // Gör required
            } else {
                field.classList.add('radio-hidden');       // Dölj
                input.removeAttribute('required');         // Ta bort required
            }
        });
    }

    // Huvudfunktion som styr vad som ska visas
    function showMealFields(selectedMeal) {
        handleFields(lunchFields, selectedMeal === 'lunch');
        handleFields(afternoonTeaFields, selectedMeal === 'afternoon-tea');
        handleFields(dinnerFields, selectedMeal === 'dinner');
    }

    // Event listeners för radioknappar
    const mealRadios = document.querySelectorAll('input[name="booking-type"]');
    mealRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            showMealFields(this.value);
        });
    });

    // 🔧 INIT – sätt första valet som aktivt (ändra om du har annan standard)
    const defaultRadio = document.querySelector('input[name="booking-type"]:checked');
    if (defaultRadio) {
        showMealFields(defaultRadio.value);
    } else {
        showMealFields('lunch'); // fallback
    }
});