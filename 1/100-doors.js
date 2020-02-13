function getFinalOpenedDoors(numDoors) {

  // create empty array to show which doors are open
  let opens = [];

  // create an array with 100 0s which means all closed
  let doors = Array(100).fill(0);

  // run through the doors 100 times, etc.
  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
      if (j % i) {
        if (doors[j-1] == 0) {
          doors[j-1] = 1;
        }
        else {
          doors[j-1] = 0;
        }
      }
    }
  }

  // check which doors are open, record door in opens array
  for (let num = 1; num <= 100; num++) {
    if (doors[num-1] == 1) {
      opens.push(num);
    }
  }

// returns array of door numbers that are open
return opens;

}