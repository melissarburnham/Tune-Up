/*
 *  main.js to receive user input,
 *  translate to method calls to objects:
 *    googleApi  | (google maps API - local service provider locations)
 *    vehicleApi | (NHTSA API - source info for year/make/model)
 *    db         | (Firebase database)  
**/

$(document).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible dropdown
  $('.collapsible').collapsible();

  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
    // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
  });

  $('select').material_select();
});

/*

SUGGESTED NAMING CONVENTIONS FOR HTML ID'S

========= Update Screen with user's data =========
Display div's for last maintenance data
$('#js-display-last-oil-change').text();
$('#js-display-last-tire-rotation').text();
$('#js-display-last-car-inspection').text();
$('#js-display-last-brake-inspection').text();
$('#js-display-last-wiper-blades').text();

============== Sign Out ==============
$('#js-sign-out').click( function() {
  userAuth.signOut();
  // then redirect to home page
});

=============== Add New Car ===============
$('#js-add-car-submit').click( function() {
  $('#js-add-car-year').val()
  $('#js-add-car-make').val()
  $('#js-add-car-model').val()
  $('#js-add-car-mileage').val()
  db.addNewCar(uid, year, make, model, mileage);
});

================== Update Maintenance Intervals ==================
$('body').on("click", "#js-update-interval-oil-change", function() {
  db.updateIntervalOilChange(uid, carKey, newIntervalMiles);
});
$('body').on("click", "#js-update-interval-tire-rotation", function() {
  db.updateIntervalTireRotation(uid, carKey, newIntervalMiles);
});
$('body').on("click", "#js-update-interval-car-inspection", function() {
  db.updateIntervalCarInspection(uid, carKey, newIntervalMonths);
});
$('body').on("click", "#js-update-interval-brake-inspection", function() {
  db.updateIntervalBrakeInspection(uid, carKey, newIntervalMonths);
});
$('body').on("click", "#js-update-interval-wiper-blades", function() {
  db.updateIntervalWiperBlades(uid, carKey, newIntervalMonths);
});

========= Update Last Maintenance =========
$('body').on("click", "#js-update-last-oil-change", function() {
  db.updateLastOilChange(uid, carKey, newMileage);
});
$('body').on("click", "#js-update-last-tire-rotation", function() {
  db.updateLastTireRotation(uid, carKey, newMileage);
});
$('body').on("click", "#js-update-last-car-inspection", function() {
  db.updateLastCarInspection(uid, carKey, dateUnixTime);
});
$('body').on("click", "#js-update-last-brake-inspection", function() {
  db.updateLastBrakeInspection(uid, carKey, dateUnixTime);
});
$('body').on("click", "#js-update-last-wiper-blades", function() {
  db.updateLastWiperBlades(uid, carKey, dateUnixTime);
});

=============== Delete Car ===============
$('body').on("click", ".js-delete-car", function() {
  db.deleteCar(uid, carKey);
})









*/