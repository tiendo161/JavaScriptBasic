// Factory Function: it produces objects
// Name: cammel case oneTwoThreeFour
function createCircle(radius) {
   return {
        radius,
        draw() {
            console.log ('draw');
        }
    }
}

const c1 = createCircle(1);
console.log (c1);

const c2 = createCircle(3);
console.log (c2);


// Contructor
// Name: OneTwoThree

