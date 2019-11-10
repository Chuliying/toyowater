$( document ).ready(function() {
   var $mainImg = $('.img-zone img');
   var $imgList = $('.img-list img');
   $imgList.click(function(){
    var _src = $(this).attr('src');
    $mainImg.attr("src",_src);
   });
});