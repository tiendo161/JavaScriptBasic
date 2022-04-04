// Enumerating properties of an object
// get all the properties of an object
// check a properties in an object


const circle = {
    radius : 1,
    draw (){
        console.log ('draw')
    }
};

//1. for - in loop:
for (let key in circle){
    console.log(key, circle[key]);
}

console.log('----------------------');

// 2. for- of loop:
// just get the properties of object
for (let key of Object.keys(circle)){
    console.log (key);
}

console.log('----------------------');
// get the properties and properties value

for (let entry of Object.entries(circle)){
    console.log(entry);
}

// 3. in operator
// check a property in an object
if ('radius' in  circle){
    console.log ('Yes');
}
if ('draw' in circle){
    console.log('Yes');
}