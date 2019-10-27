$(document).ready(function () {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    var size = 32;
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
    setTimeout(function () {
        var material = new Blotter.LiquidDistortMaterial();
        Blotter.Text.padding = 100;
        material.uniforms.uSpeed.value = 0.2;
        material.uniforms.uVolatility.value = 0.025;
        material.uniforms.uSeed.value = 0.11;
        var blotter = new Blotter(material, { texts: text });
        var scope = blotter.forText(text);
        var $container = document.getElementById("product-title");
        scope.appendTo($container);

        var blotter2 = new Blotter(material, { texts: text2 });
        var scope2 = blotter2.forText(text2);
        var $container2 = document.getElementById("news-title");
        scope2.appendTo($container2);
    }, 100)

    $(window).on('scroll', firstView);
    var $waveContainer = $('.wave-container');

    function firstView(){
        var nonScroll = $('.wave-container').hasClass("show");
        if (!nonScroll){
            $(window).unbind('scroll');
            //$('.header').addClass('header-bg');
            $('.wave-container, .index-about').addClass('show');

            var _position = $(window).height();

            $body.animate({
                scrollTop: _position
            }, 800);
        }

        // else{
        //     bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //     $waveContainer.css("transform","translateY("+bodyScrollTop*0.15+"px)");
        // }
    }

    var $elemental = $('.elemental');
    var $circleInfo = $('.circle-inside').find('li');

    $elemental.on('click', function(){
        $elemental.removeClass("active");
        $circleInfo.removeClass("show")
        var _index = $(this).index();
        $(this).addClass("active");
        $circleInfo.eq(_index).addClass("show");
    })
});