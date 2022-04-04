const circle = {
    radius : 1,
    draw(){
        console.log ('draw');
    }
}

// 1. Using for in loop:
const another = {};
for (let key in circle){
    another[key] = circle[key];
}
console.log(another);

// 2. Using Object.assign method
// blank array
const another1 = Object.assign ({}, circle);
console.log (another1);

// array with any other attribute
const another2 = Object.assign({color :'red'}, circle)
console.log (another2);
another2.draw();

//3. using spread ... operator
const another3 = {...circle};
console.log(another3);
another3.draw();