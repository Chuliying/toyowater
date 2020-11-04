$( document ).ready(function() {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var $hamburger = $('.hamburger');
    var $menu  = $('.menu');
    
    $hamburger.click(function() {
        $hamburger.toggleClass('is-active');
        $menu.fadeToggle(300);
        return false;
    });
    
    var $introBTN = $('.intro-box .btn');
    $introBTN.click(function(){
        var $this     = $(this);
        var _index    = $this.parent().parent().index();
        var $target   = $('.index-container').eq(_index);
        var _position = $target.offset().top;
         
        $body.animate({
            scrollTop: _position - 35
        }, 1000);
    })

    //var $productNavLi = $('.product-nav li');

    // if ($productNavLi){

    //     var $productSection = $('.product-box > div');

    //     $productNavLi.on("click", function(){
    //         var $thisIndex = $(this).index();
    //         var _position = $productSection.eq($thisIndex).offset().top;

    //         $body.animate({
    //             scrollTop: _position - 65
    //         }, 1000);
    //     })
    // }

    
    var $waveContainer = $('.wave-container');
    var $header = $('.header');
    var $kv = $('.kv');
    var index = $('#index');
    if(index.length < 1){
        setTimeout(function(){$waveContainer.addClass("show");},500)
        
    }

    // function firstView() {
    //     var nonScroll = $('.wave-container').hasClass("show");
    //     var _position = document.documentElement.scrollTop || document.body.scrollTop;
    //     if (!nonScroll && _position<350) {
    //         //$(window).unbind('scroll');
    //         $('.wave-container, .index-about').addClass('show');
    //     }

       


    //     if (_position < 250) {
    //         $header.removeClass('header-bg');
    //     }
    //     else {
    //         $('.wave-container, .index-about').addClass('show');
    //         $header.addClass('header-bg');
    //     }

    //     higherWave();
    // }
    var $wave = $('.waves');
    $(window).on('scroll', higherWave);
    function higherWave(){
        var _position = document.documentElement.scrollTop || document.body.scrollTop;
        if (_position> 100){
            $header.addClass('header-bg');
        }
        else{
            $header.removeClass('header-bg');
        }
        // $wave.addClass('higher');
        // setTimeout(function(){
        //     $wave.removeClass('higher');
        // },300)
    }
});