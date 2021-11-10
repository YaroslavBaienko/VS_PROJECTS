function printRectangleInfo(a, b) {
  const perimeter = 2 * a + 2 * b;
  const square = a * b;
  console.log('Rectangle', a, 'x', b);
  console.log('Perimeter is ', perimeter);
  console.log('Square ', square);
  console.log('_________________');
}

// printRectangleInfo(4, 8);

// printRectangleInfo(100, 90);

// function getTaxSanctions(sumborg, dayborg, NBU) {
//   const penya = (((sumborg * dayborg) / 0.1) * NBU * 1.2) / 365;
//   console.log('Penya ', penya);
// }

// =B6*B10/100%*18%*1,2/365

// getTaxSanctions(46.82, 483, 0.018);

// getTaxSanctions(7000, 365, 0.18);

// function getRectangleSquare(a, b) {
//   const square = a * b;

//   return square;
// }

// getRectangleSquare(3, 4);

// function buildHouse(numberOfFloors) {
//   const house = `${numberOfFloors}--floors house`;
//   return house;
// }

// const smallHouse = buildHouse(2);
// const bigHouse = buildHouse(9);

// console.log(smallHouse);
// console.log(bigHouse);
