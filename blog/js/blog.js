// external js: isotope.pkgd.js

// init Isotope
var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  
  
  
  // Programming filters
  var filtersElem = document.querySelector('.filters-programming');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    //if ( !matchesSelector( event.target, 'button' ) ) {
    //  return;
    //}
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
  
  // Other filters
  var filtersElem = document.querySelector('.filters-other');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    //if ( !matchesSelector( event.target, 'button' ) ) {
    //  return;
    //}
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });

  // 2017 filters
  var filtersElem = document.querySelector('.filters-2017');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    //if ( !matchesSelector( event.target, 'button' ) ) {
    //  return;
    //}
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });

  // 2018 filters
  var filtersElem = document.querySelector('.filters-2018');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    //if ( !matchesSelector( event.target, 'button' ) ) {
    //  return;
    //}
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
  
  // All Posts filters
  var filtersElem = document.querySelector('.filters-all');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    //if ( !matchesSelector( event.target, 'button' ) ) {
    //  return;
    //}
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });