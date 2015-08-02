var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('#navbar-new').addClass('white-nav');
    } else {
        $('#navbar-new').removeClass('general-nav');
    }

});