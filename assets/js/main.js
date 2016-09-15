
$('#view-askew').on("click", function() {
    $('#view-askew-page').addClass('active');
    $('#hero-films').addClass('active');
    $('#film-categories').addClass('active');
    $('#myNavbar').addClass('hidden');
    $('#back-button').addClass('active');
    
    $('#true-north-page').removeClass('active');
    $('#other-films-page').removeClass('active');
    
    return false;
});

$('#true-north').on("click", function() {
    $('#true-north-page').addClass('active');
    $('#hero-films').addClass('active');
    $('#film-categories').addClass('active');
    $('#myNavbar').addClass('hidden');
    $('#back-button').addClass('active');
    
    $('#view-askew-page').removeClass('active');
    $('#other-films-page').removeClass('active');
    
    return false;
});

$('#other-films').on("click", function() {
    $('#other-films-page').addClass('active');
    $('#hero-films').addClass('active');
    $('#film-categories').addClass('active');
    $('#myNavbar').addClass('hidden');
    $('#back-button').addClass('active');
    
    $('#view-askew-page').removeClass('active');
    $('#true-north-page').removeClass('active');
    
    return false;
});

$('#back-button').on('click', function() {
    $('#other-films-page').removeClass('active');
    $('#hero-films').removeClass('active');
    $('#film-categories').removeClass('active');
    $('#back-button').removeClass('active');
    $('#myNavbar').removeClass('hidden');
    $('#view-askew-page').removeClass('active');
    $('#true-north-page').removeClass('active');
    
    return false;
});

// transition when changing pages
$('body').fadeIn(400, function(){
    $('body').removeClass('transition');
});
// to fade out before redirect
$('.nav a').click(function(e){
    redirect = $(this).attr('href');
    e.preventDefault();
    $('body').fadeOut(400, function(){
        document.location.href = redirect
    });
});
