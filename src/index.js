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



$("#swim").click(function() {
  var tl = new TimelineLite();
  tl.staggerTo("#fish", 1, {rotation:360, x:100}, 0.5);

      tl.play();



});

$("#float").click(function() {
  var tl = new TweenLite();
  // tl.staggerTo("#clouds", 1, {rotation:360, x:100}, 0.5);
  // tl.fromTo("#clouds", 1, {left:0}, {left:100});
  tl.to("#clouds", 2, {width:"200px", height:"150px"});

      



});
