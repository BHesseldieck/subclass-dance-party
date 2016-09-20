$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancers').append(dancer.$node);
    if (!$(dancer.$node).hasClass('superHeroDancer')) {
      $(dancer.$node).addClass('draggable');
    }
    dancers.push(dancer);
  });



  $('.lineUp').on('click', function(event) {
    var horizontalPos = 0;

    dancers.forEach(dancer => {
      if (dancer.constructor = makeSuperHeroDancer) {
        dancer.top = 400;
      }
      dancer.lineUp(400, horizontalPos);
      horizontalPos += 75;

    });
  });

  $('.dancers span').addClass('draggable');

  $('.remove').on('click', function() {
    $('.dancers span').toggleClass('removeDancers');
    $('.remove').toggleClass('highlight');
    $('.dancers span').toggleClass('draggable');
  });


  $('.dancers').on('click', 'span', function(event) {
    if ($(this).hasClass('removeDancers')) {
      $(this).remove();
    } else if ($(this).hasClass('draggable')) {
      $(this).draggable();
    }
  });


  // $('.dancers').on('mouse-down', 'span', function() {
  //   console.log('hello');
  //   $(this).draggable();
  // });

  console.log(dancers);


});

