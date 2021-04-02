$(function(){

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

    $('.shop__products-rate').rateYo({
        rating: 3.6,
        starWidth: "22px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        spacing: "10px",
        readOnly: true
      });


    $('.filter-star__info-rate, .shop__products-rate').rateYo({
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