$( document ).ready(function() {

  $(function(){
        $(".typed").typed({
          strings: ["data science projects.", "signal processing tools.", "system administration scripts.", "computer vision softwares.", "lots of stuff, tough this box may go crazy sometimes."],
          typeSpeed: 1.1,
          loop: true,
          backDelay: 1700
        });
    });

      // $('a.page-scroll').bind('click', function(event) {
      //     var $anchor = $(this);
      //     $('html, body').stop().animate({
      //         scrollTop:  ($($anchor.attr('href')).offset().top - 50)
      //     }, 1250, 'easeInOutExpo');
      //     event.preventDefault();
      // });

    console.log( "ready!" );
});
