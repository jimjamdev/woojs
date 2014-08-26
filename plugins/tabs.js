$('.tab').click(function() {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
});
