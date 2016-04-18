//fuckshitstack

//you take some shit
//put it up on the wall
var wall = []
wall.push('shit');
//check it out for a while
function checkOut(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
checkOut(3000);
//you take that shit up off the wall
//put it down on the floor in a glass bowl
var floor = {glassBowl:[wall.pop()]};
//you take some fuck
//put it up on the wall where the shit used to be
wall.push('fuck');
//you take that fuck up off the wall
//put it down on the floor with the shit in a glass bowl
floor.glassBowl.push(wall.pop());
//what? yo heres another piece of advice-vice
//you take some fuck and then some shit
var fuckShitStack = []
fuckShitStack.push([floor.glassBowl[1],floor.glassBowl[0]]);
//then some fuck then some shit
fuckShitStack[0].push(floor.glassBowl[1],floor.glassBowl[0]);
//You've got a fuck shit stack
//A fuck shit stack
//take some fuck then some shit
fuckShitStack.push([floor.glassBowl[1],floor.glassBowl[0]]);
//then some fuck then some shit
fuckShitStack[1].push(floor.glassBowl[1],floor.glassBowl[0]);
//You've got a fuck shit stack
//A fuck shit stack
console.log(fuckShitStack);
