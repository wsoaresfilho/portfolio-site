$('#main-content').popover();

$('[data-toggle="tooltip"]').tooltip();

$('#logo').hover(function(){
    $(this).addClass('animated fadeInRightBig');
});

$('#appify').hover(function(){
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('hinge').addClass('fadeIn');
    } );
});

$('#sunflower').hover(function(){
    $(this).addClass('animated jello');
});

$('#bokeh').hover(function(){
    $(this).addClass('animated pulse');
});