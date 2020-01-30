// Set some varialbe

let userScroll = false;

const wrap = document.getElementById('wrap');
const scrollLTR = document.getElementById('pageWidthLTR');
const scrollRTL = document.getElementById('pageWidthRTL');
const scrollSquare = document.getElementById('square');
const scrollSquareReverse = document.getElementById('squareReverse');

const scrollHeight = document.getElementById('height');

//When scroll do all this
window.addEventListener('scroll', function(e) {
  if (!userScroll) {
    window.requestAnimationFrame(function() {
      userScroll = false;

      //calculate diminsons of page
      let scrollTop =
        document.documentElement['scrollTop'] || document.body['scrollTop'];

      var scrollBottom =
        (document.documentElement['scrollHeight'] ||
          document.body['scrollHeight']) -
        document.documentElement.clientHeight;

      // do math to get values for CSS
      let percentLTR = (scrollTop / scrollBottom) * 100 + '%';
      let percentRTL = 100 - (scrollTop / scrollBottom) * 100 + '%';
      let percentSquare = (scrollTop / scrollBottom) * 360 + 'deg';

      let opacityScroll = scrollTop / scrollBottom;

      let rotateScroll = (scrollTop / scrollBottom) * 360 * 45 + 'deg';

      // pass some variables to functions
      scrollingLTR(percentLTR, opacityScroll, rotateScroll);
      scrollingRTL(percentRTL);
      scrollingSquare(percentSquare);
    });
    userScroll = true;
  }
});

// This is where we make stuff happen
function scrollingLTR(percentLTR, opacityScroll, rotateScroll) {
  scrollLTR.style.width = percentLTR;
  //scrollHeight.style.height = percentLTR;
  scrollHeight.style.opacity = opacityScroll;
  scrollHeight.style.transform = 'rotate(-' + rotateScroll + ')';
}

function scrollingRTL(percentRTL) {
  scrollRTL.style.width = percentRTL;
}

function scrollingSquare(percentSquare) {
  //scrollSquare.style.height = percentSquare;
  scrollSquare.style.transform = 'rotate(' + percentSquare + ')';
  scrollSquareReverse.style.transform = 'rotate(-' + percentSquare + ')';
}
