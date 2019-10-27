$( document ).ready(function() {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var $hamburger = $('#hamburger-icon');
    var $menulist  = $('.menu-list');
    
    $hamburger.click(function() {
        $hamburger.toggleClass('active');
        $menulist.toggleClass('active');
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
});