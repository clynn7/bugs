import $ from 'jquery';
import TweenMax from 'gsap';
import SVGInjector from 'svg-injector';

$(document).ready(function() {
  console.log("Document ready to go!");

  // Elements to inject
  var mySVGsToInject = document.querySelectorAll('img.inject-me');

  // Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function(svg) {
      // Callback after each SVG is injected
      console.log('SVG injected: ' + svg.getAttribute('id'));

      //We are loaded, so callback our inital function
      //start();

    }
  };

  // Trigger the injection
  SVGInjector(mySVGsToInject, injectorOptions, function(totalSVGsInjected) {
    // Callback after all SVGs are injected
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
  });


}); //end Document ready

$("#explode").click(function() {
  var paths = $("path").each(function() {
    console.log(this.id); //print out all the path ids
  });

  TweenMax.staggerTo(shuffle(paths), 0.1, {
    cycle: {
      x: [100, -100],
      rotation: [30, 60, 90]
    },
    repeat: 0
  }, 0.1);

});

$("#walk").click(function() {
  var l1 = new TimelineMax();
  l1.to("#g75743", 1, {
    x: -10,
    y: 10,
  }, "left");

  l1.to('#g75743', 1, {
    rotation: "-=5",
    ease: Linear.easeNone
  });
  l1.to("#g75743", 1, {
    x: -20,
    y: 20,
  }, "left");
});


// Util function to shuffle an array.
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
