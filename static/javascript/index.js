// const { FALSE } = require("node-sass");

var parent = document.querySelector('.projects'),
    items = parent.querySelectorAll('.project'),
    loadMoreBtn = document.querySelector('.load-more-btn'),
    maxItems = 6,
    hiddenClass = 'visually-hidden';

[].forEach.call(items, function(item, idx){
    if (idx > maxItems - 1) {
        item.classList.add(hiddenClass);
    }
});

loadMoreBtn.addEventListener('click', function(){

[].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
    // console.log(item);
    if (idx < maxItems ) {
        item.classList.remove(hiddenClass);
    }

    if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
        loadMoreBtn.style.display = 'none';
    }

});

});


$(document).ready(function() {
    $(window).scroll(function() { 
        var Scroll = $(window).scrollTop() + 1, 
                    home = $('#home').offset().top - 100, 
                    about = $('#about').offset().top - 100, 
                    service = $('#service').offset().top - 50,
                    work = $('#work').offset().top - 50,
                    contact = $('#contact').offset().top - 200; 

        if (Scroll >= home) {
            $('.home-sect').addClass("current");
        } else {
            $('.home-sect').removeClass("current");
        }
        if (Scroll >= about) { 
            $(".about-sect").addClass("current");
            $('.home-sect').removeClass("current");
        } else {
            $(".about-sect").removeClass("current"); 
        }
        if (Scroll >= service) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".service-sect").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".about-sect").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".service-sect").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
        if (Scroll >= work) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".project-sect").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".service-sect").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".project-sect").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
        if (Scroll >= contact) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".contact-sect").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".project-sect").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".contact-sect").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
    });
});


