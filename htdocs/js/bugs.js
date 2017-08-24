// A $( document ).ready() block.
$(document).ready(function() {
  console.log("Document ready!");

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
      //walk();

    }
  };

  // Trigger the injection
  SVGInjector(mySVGsToInject, injectorOptions, function(totalSVGsInjected) {
    // Callback after all SVGs are injected
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
  });


}); //end Document ready




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

function explode() {
  var paths = $("path").each(function() {
    console.log(this.id); //print out all the path ids
    //Draggable.create(this);


    // if(this.id === 'p17' || this.id === 'p19') {
    // TweenLite.to(this, 1.5, { ease: Bounce.easeOut, y: -10 });
    // TweenLite.to(this, 1.5, { ease: Bounce.easeOut, y: +10 });
    // }
  });
  //TweenMax.staggerFrom(paths, 1, {y:"+=150"}, 0.2);

  TweenMax.staggerTo(shuffle(paths), 0.1, {
    cycle: {
      x: [100, -100],
      rotation: [30, 60, 90]
    },
    repeat: 0
  }, 0.1);
  //TweenMax.staggerFromTo(paths, 1, {opacity:1}, {opacity:0}, 0.2);

}

function walk() {

  Draggable.create("#g74523");
  Draggable.create("#g74620");

  var t1 = new TimelineLite();
  var t2 = new TimelineLite();
  t1.to("#g75743", 1, {
    x: -20,
    y: 50,
    repeat: -1,
    yoyo: true
  }, "left");
  t2.to("#g75926", 1, {
    x: -20,
    y: 5,
    rotation: 2,
    repeat: -1,
    yoyo: true
  }, "right");
  t1.play("left");
  t2.play("right");

  // Move the head around
  //var head = new TimelineLite();
  //head.to("#g76089", 1, {x:-20, y:5, repeat:-1, yoyo:true}, "head");
  //head.play("head");

}
