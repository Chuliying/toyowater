$(document).ready(function () {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    $(window).on('scroll', firstView);
    var $waveContainer = $('.wave-container');
    var $header = $('.header');
    var $kv = $('.kv');
    var _wh = $(window).height();
    var _ww = $(window).width();
    var $productLi = $('.product-box li');
    var $productList = $('.index-product-list .flex-box');

    $('body').imagesLoaded(function(){  
        let _heightValue = [];  
        $productList.each(function(){
            let _h =  $(this).height();
            _heightValue.push(_h);
        });
        const _heightest = Math.max(..._heightValue);
        $('.index-product-list').css("height",_heightest);
        $kv.css("height",_wh);
    })
  

    $productLi.click(function(){
        var _thisindex = $(this).index();
        $productLi.removeClass('active');
        $(this).addClass('active');
        $productList.removeClass("show");
        $productList.eq(_thisindex).addClass("show");
    })

    function firstView() {
        var nonScroll = $('.wave-container').hasClass("show");
        var _position = document.documentElement.scrollTop || document.body.scrollTop;
        if (!nonScroll && _position< 0.5*_wh) {
            //$(window).unbind('scroll');
            $('.wave-container, .index-about').addClass('show');

            if( _ww > 776){
                $body.animate({
                    scrollTop: _wh
                }, 400);
            }
        }

        if (_position < 0.5*_wh) {
            $kv.removeClass('fadeOut');
            $header.removeClass('header-bg');
        }
        else {
            $('.wave-container, .index-about').addClass('show');
            $kv.addClass('fadeOut');
            $header.addClass('header-bg');
        }

        //higherWave();
    }
    var $wave = $('.waves');
    // function higherWave(){
    //     $wave.addClass('higher');
    //     setTimeout(function(){
    //         $wave.removeClass('higher');
    //     },300)
    // }

    var $elemental = $('.elemental');
    var $circleInfo = $('.circle-inside').find('li');

    $elemental.on('mouseover', function () {
        $elemental.removeClass("active");
        $circleInfo.removeClass("show")
        var _index = $(this).index();
        $(this).addClass("active");
        $circleInfo.eq(_index).addClass("show");
    })
});