$(function(){

    
    $('.related__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });


    $('.detalis-tabs__link').on('click', function(e){

        e.preventDefault();
        $('.detalis-tabs__link').removeClass('detalis-tabs__link--active');
        $(this).addClass('detalis-tabs__link--active');

        $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
        $($(this).attr('href')).addClass('detalis-tabs__content-item--active');

    });


    $('.detalis__content-num').styler();


    $('.detalis-slider__thumb').slick({
        asNavFor: '.detalis-slider__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });

    $('.detalis-slider__big').slick({
        asNavFor: '.detalis-slider__thumb',
        draggable: false,
        arrows: false
    });


    $('.shop__page-link').on('click', function () {
        $('.shop__page-link').removeClass('shop__page-link--active');
        $(this).addClass('shop__page-link--active');
    });

    $('.user-nav__tile').on('click', function () {
        $('.shop__content').toggleClass('shop__content--list');
    });


    $('.filter-price__input').ionRangeSlider({

        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },

    });

    $('.detalis__content-rate').rateYo({
        rating: 4,
        starWidth: "18px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        spacing: "10px",
        readOnly: true
    });

    $('.shop__products-rate').rateYo({
        rating: 3.6,
        starWidth: "22px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        spacing: "10px",
        readOnly: true
      });


    $('.filter-star__info-rate').rateYo({
        rating: 3.6,
        starWidth: "10px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        spacing: "6px",
        readOnly: true
      });

      


    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
          scope: 'local'
        }
    };

    
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

    // var mixer1 = mixitup('.ofTheWeek__products');
    // var mixer2 = mixitup('.design__content');


    

});