let slideIndex = 0;
        showSlides(slideIndex);

        function moveSlide(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n - 1);
        }

        function showSlides(n) {
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");

            if (n >= slides.length) {
                slideIndex = 0;
            } else if (n < 0) {
                slideIndex = slides.length - 1;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex].style.display = "block";
            dots[slideIndex].className += "active";
        }


        // let slideIndex = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');

            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex = index;
            }

            // Hide all slides
            slides.forEach(slide => {
                slide.style.display = 'none';
            });

            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });

            // Show the current slide and add active class to the corresponding dot
            slides[slideIndex].style.display = 'block';
            dots[slideIndex].classList.add('active');
        }

        function moveSlide(n) {
            showSlide(slideIndex + n);
        }

        function currentSlide(n) {
            showSlide(n - 1);
        }

        // Initialize the slider
        showSlide(slideIndex);

// navbar
function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}