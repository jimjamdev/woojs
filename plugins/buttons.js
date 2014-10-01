(function($){
    'use strict';
       $('.btn--onclick').click(function() {
        $('.btn--onclick').not(this).removeClass('active');
        $(this).toggleClass('active');
     });
     $('body:not(.btn--onclick)').click(function() {
        $('.btn--onclick').removeClass('active');
      });
     $('.btn--onclick').click(function(e) {
        e.stopPropagation();
    });
}

