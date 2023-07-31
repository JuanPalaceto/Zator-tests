var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    direction: getDirection(),
    allowTouchMove: false,
    spaceBetween: 20,
    rewind: true,
    breakpoints: {
        768: {
            slidesPerView: 1,
            allowTouchMove: true,
        }
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
};