    jQuery(document).ready(function($){

        // Mobile-Menu
        $("ul#main-menu").slicknav({
            prependTo: ".responsive-menu-wrap"
        });

        // Stick Menu
            var s = $("#sticker");
            var pos = s.position();                    
            $(window).scroll(function() {
                var windowpos = $(window).scrollTop();
                if (windowpos >= pos.top) {
                    s.addClass("stick");
                } else {
                    s.removeClass("stick"); 
                }
            });

        // homepage Slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='icon icon-arrow-left-circle'></i>", "<i class='icon icon-arrow-right-circle'></i>"],
            mouseDrag: false,
            touchDrag: false,
            animateIn:'fadeIn',
            animateOut:'fadeOut'
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".single-slider-item h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slider-item .slider-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
               
        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".single-slider-item h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slider-item .slider-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        // Project Slider
        $(".projects-inner").owlCarousel({
            items: 4,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='icon icon-arrow-right'></i>", "<i class='icon icon-arrow-left'></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                480:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                }
            }
        });

        // News Inner Slider
        $(".news-inner").owlCarousel({
            items: 2,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,    
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                480:{
                    items:1,
                },
               768:{
                    items:2,
                },
                992:{
                    items:2,
                },
            }
        });

        // Client Brand Slider
        $(".client-brands-inner").owlCarousel({
            items: 6,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            margin:20,    
            autoHeight:true,     
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                480:{
                    items:3,
                },
                768:{
                    items:4,
                },
                992:{
                    items:6,
                },
            }
        });
    });

        //scroll to top
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
                } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
        });

        // Client Comment Section
        function openClient(evt, clientCopy) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("client-comment");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("client-links");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(clientCopy).style.display = "block";
            evt.currentTarget.className += " active";
        }