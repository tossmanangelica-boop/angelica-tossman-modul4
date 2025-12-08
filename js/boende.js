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

    /* --------------------------------------
       POP-UP FÄLT I FORMULÄR
    -------------------------------------- */
    const checkbox = document.getElementById("book-restaurant-yes");
    const bookingFields = document.querySelectorAll(".restaurant-booking-fields");

    if (checkbox) {
        checkbox.addEventListener("change", function () {
            bookingFields.forEach(field => {
                field.classList.toggle("hidden", !this.checked);
            });
        });
    }

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