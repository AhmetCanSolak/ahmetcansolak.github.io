$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});

var IP;
var CITY;

$(document).ready(function() {
  getGeoLocation();
});

function getGeoLocation() {
  return $.getJSON('https://freegeoip.net/json/')
    .done(function(location) {
      console.log("location found!");
      //console.log(location.ip);
      p = document.createElement("p");
      p.innerHTML =  location.ip;
      document.getElementById('ip').innerHTML= location.ip;
      document.getElementById('city').innerHTML= location.city;
      document.getElementById('country').innerHTML= location.country_name;
      document.getElementById('latitude').innerHTML= location.latitude;
      document.getElementById('longitude').innerHTML= location.longitude;
      return location;
    });
}
