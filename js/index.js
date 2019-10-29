$(document).ready(function () {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    var size = 36;
    var uniformValue = 0.025;
    var text = new Blotter.Text("Products", {
        family: "lato",
        size: size,
        fill: "#666666"
    });
    var text2 = new Blotter.Text("News", {
        family: "lato",
        size: size,
        fill: "#666666"
    });

    var material = new Blotter.LiquidDistortMaterial();
    Blotter.Text.padding = 100;
    material.uniforms.uSpeed.value = 0.75;
    material.uniforms.uVolatility.value = uniformValue;
    material.uniforms.uSeed.value = 1;
    material.needsUpdate = true;
    var blotter = new Blotter(material, { texts: text });
    blotter.needsUpdate = true;
    var scope = blotter.forText(text);
    var $container = document.getElementById("product-title");
    scope.appendTo($container);

    var blotter2 = new Blotter(material, { texts: text2 });
    var scope2 = blotter2.forText(text2);
    var $container2 = document.getElementById("news-title");
    scope2.appendTo($container2);

    $(window).on('scroll', firstView);
    var $waveContainer = $('.wave-container');
    var $header = $('.header');
    var $kv = $('.kv');

    function firstView() {
        var nonScroll = $('.wave-container').hasClass("show");
        var _position = document.documentElement.scrollTop || document.body.scrollTop;
        if (!nonScroll && _position<350) {
            //$(window).unbind('scroll');
            $('.wave-container, .index-about').addClass('show');

            var _position = $(window).height();

            $body.animate({
                scrollTop: _position
            }, 800);
        }

        // header 
       


        if (_position < 250) {
            $kv.removeClass('fadeOut');
            $header.removeClass('header-bg');
        }
        else {
            $('.wave-container, .index-about').addClass('show');
            $kv.addClass('fadeOut');
            $header.addClass('header-bg');
        }

        higherWave();
        uniformsV();
    }
    var $wave = $('.waves');
    function higherWave(){
        $wave.addClass('higher');
        setTimeout(function(){
            $wave.removeClass('higher');
        },300)
    }

   function uniformsV(){
    if (!trigger ){
        var trigger = true;
        scope.material.uniforms.uVolatility.value = 0.045;
    }
    
   
       setTimeout(function(){
        trigger = false;
        scope.material.uniforms.uVolatility.value = 0.025;
    },300)
   } 

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