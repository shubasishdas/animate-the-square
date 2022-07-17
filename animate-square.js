const squareWrapper = document.querySelector(".square-wrapper");
const square = document.querySelector(".square");

// get the width and height of parent of square (square-wrapper)
const widthOfSquareWrapper = squareWrapper.offsetWidth;
const heightOfSquareWrapper = squareWrapper.offsetHeight;

// isAnimateFromLeft defines if the square move from left to right or reverse; initially moving from left to right
// isAnimateFromTop defines if the square move from top to bottom or reverse; initially moving from top to bottom

let isAnimateFromLeft = true,
  isAnimateFromTop = true;

let nextLeftPosition, nextTopPosition;

// move the square 10 pixels right and 10 pixels down in every 1 second
// change the direction for the related axis when the box hits or goes over an edge of the window,

setInterval(() => {
  // get the current left position and top position of square
  const currentLeft = square.offsetLeft;
  const currentTop = square.offsetTop;

  // add 10px to the current left position if the square moves from left to right otherwise subtract 10px
  nextLeftPosition = isAnimateFromLeft ? currentLeft + 10 : currentLeft - 10;
  // add 10px to the current left position if the square moves from top to bottom otherwise subtract 10px
  nextTopPosition = isAnimateFromTop ? currentTop + 10 : currentTop - 10;

  // get the next right and bottom position of square
  const nextRightPosition = nextLeftPosition + square.offsetWidth;
  const nextBottomPosition = nextTopPosition + square.offsetHeight;

  // if the square right position exceed the width of square wrapper, move the square from right to left
  if (nextRightPosition > widthOfSquareWrapper) {
    isAnimateFromLeft = false;
    nextLeftPosition = currentLeft - 10;
  }
  // if the square's left position is less than 0, move the square from left to right
  else if (nextLeftPosition < 0) {
    isAnimateFromLeft = true;
    nextLeftPosition = currentLeft + 10;
  }

  // if the square's bottom position exceed the height of square-wrapper, move the square from bottom to top
  if (nextBottomPosition > heightOfSquareWrapper) {
    isAnimateFromTop = false;
    nextTopPosition = currentTop - 10;
  }
  // if the square's top position is less than 0, move the square from top to bottom
  else if (nextTopPosition < 0) {
    isAnimateFromTop = true;
    nextTopPosition = currentTop + 10;
  }

  // apply the next position of square; either left/right or top/bottom
  square.style.left = `${nextLeftPosition}px`;
  square.style.top = `${nextTopPosition}px`;
}, 1000);
