(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Customer Review Arrow Navigation
    $(document).ready(function() {
        var owl = $('.testimonial-carousel');
        
        $('.testimonial-prev').click(function() {
            owl.trigger('prev.owl.carousel');
        });
        
        $('.testimonial-next').click(function() {
            owl.trigger('next.owl.carousel');
        });
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    


    // Garden Care Packages — inline form AJAX submission
    // Only runs if package forms exist on the page
    document.querySelectorAll('.pkg-ajax-form').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = new URLSearchParams(new FormData(form)).toString();
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: data
            })
            .then(function (res) {
                if (res.ok) {
                    form.style.display = 'none';
                    var success = form.closest('.pkg-inline-form').querySelector('.pkg-form-success');
                    if (success) success.classList.add('is-visible');
                } else {
                    alert('Something went wrong. Please try again or call us directly.');
                }
            })
            .catch(function () {
                alert('Something went wrong. Please try again or call us directly.');
            });
        });
    });

    // Garden Care Packages — quote toggle
    document.querySelectorAll('.btn-pkg-quote').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetId = btn.getAttribute('data-pkg-target');
            var form = document.getElementById(targetId);
            var isOpen = form.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', isOpen);
            form.setAttribute('aria-hidden', !isOpen);
            var icon = btn.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-chevron-down', !isOpen);
                icon.classList.toggle('bi-chevron-up', isOpen);
            }
            // Close other open forms
            document.querySelectorAll('.pkg-inline-form.is-open').forEach(function (other) {
                if (other.id !== targetId) {
                    other.classList.remove('is-open');
                    other.setAttribute('aria-hidden', 'true');
                    var otherBtn = document.querySelector('[data-pkg-target="' + other.id + '"]');
                    if (otherBtn) {
                        otherBtn.setAttribute('aria-expanded', 'false');
                        var otherIcon = otherBtn.querySelector('i');
                        if (otherIcon) {
                            otherIcon.classList.add('bi-chevron-down');
                            otherIcon.classList.remove('bi-chevron-up');
                        }
                    }
                }
            });
        });
    });

})(jQuery);