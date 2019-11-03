$(document).ready(function(){
    $q = $('.qa-box li');
    $q.on("click", function(){
        var $this = $(this);
        var $a = $this.find('.answer');
        $a.slideToggle(300);
    })
})