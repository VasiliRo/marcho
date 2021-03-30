$(function(){

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