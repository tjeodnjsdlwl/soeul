$(function(){
    // 날씨배너
    $('.weather-banner > .close').click(function(){
        $(this).closest(".weather-banner").slideUp(200);
    })
    $('.wheather-banner > .close').on('keydown',function(e){
        if(e.keyCode == 9 && !e.shiftkey){
            $(this).closest(".weather-banner").slideUp(200);
        }
    })

    // 슬라이드 탭
    $('.slide-tab-btn').click(function(){
        const target = $(this).attr('href');
        $(this).addClass('active').parents('h3').siblings().children().removeClass('active');
        $(target).addClass('active').siblings().removeClass('active');
        $('.slide-tab-nav').find('.sr-only').txt('');
        $(this).addClass('active').find('.sr-only').txt('선택됨');
    })

})

var mainSwiper = new Swiper(".mainSwiper", {
    centeredSlides: true,
    spaceBetween: 0,
    loop:true,
    autoplay: {
        delay: 1000,
    },
    pagination: {
        el: ".mainSwiper .pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".mainSwiper .btn-next",
        prevEl: ".mainSwiper .btn-prev",
    },
})
var sw = 0;
$('.mainSwiper .btn_pause').click(function(){
    if(sw==0){
        $(this).addClass('on');
        mainSwiper.autoplay.stop();
        sw = 1;
    }else{
        $(this).removeClass('on');
        mainSwiper.autoplay.start();
        sw = 0;
    }
});


var citizenSwiper = new Swiper(".citizenSwiper", {
    centeredSlides: true,
    spaceBetween: 0,
    loop:true,
    autoplay: {
        delay: 1000,
    },
    pagination: {
        el: ".citizenSwiper .pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".citizenSwiper .btn-next",
        prevEl: ".citizenSwiper .btn-prev",
    },
})
var sw = 0;
$('.citizenSwiper .btn_pause').click(function(){
    if(sw==0){
        $(this).addClass('on');
        citizenSwiper.autoplay.stop();
        sw = 1;
    }else{
        $(this).removeClass('on');
        citizenSwiper.autoplay.start();
        sw = 0;
    }
});

var bannerSwiper = new Swiper(".bannerSwiper", {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 43,
    loop:true,
    autoplay: {
        delay: 1000,
    },
    pagination: {
        el: ".bannerSwiper .pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".bannerSwiper .btn-next",
        prevEl: ".bannerSwiper .btn-prev",
    },
})
var sw = 0;
$('.bannerSwiper .btn_pause').click(function(){
    if(sw==0){
        $(this).addClass('on');
        bannerSwiper.autoplay.stop();
        sw = 1;
    }else{
        $(this).removeClass('on');
        bannerSwiper.autoplay.start();
        sw = 0;
    }
});

$('.btn-related').on('click',(function(){
    if($(this).hasClass('on')){
        $(this).focus().removeClass('on').find('.blind').text('펼치기');
        $('.related-side-list').slideUp(200);
    }else{
        $('.sc-related .btn-related').removeClass('on').find('.blind').text('펼치기');
        $(this).focus().addClass('on').find('.blind').text('접기');
        $('.related-side-list').slideUp(200);
        $(this).siblings('.related-side-list').slideDown(200);
    }
}));