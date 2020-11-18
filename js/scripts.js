$(function(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(document).ready(function(){
        $("#mycarousel").carousel({interval: 2000});
        $("#carouselButton").click(function() {
            if ($("#carouselButton").children("span").hasClass('fa-pause'))
            {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play'))
            {
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
            }            
        });
    });
    $('#reserve-button').click(function (){
        $('#reserveModal').modal('toggle');
    });
    $('#login-Btn').click(function (){
        $('#loginModal').modal('toggle');
    });
});
