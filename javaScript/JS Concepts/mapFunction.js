console.log("----------- mapFunction.js ------------");

const temp = [1,2,3,4,5];
function double(val){
    return val * 2;
}

// Array map() function
//1st way genrally not used
let output = temp.map(double);
console.log("dobule values:",output);

//2nd way to write map()
let output2 = temp.map((val) => val * 3);
console.log("tripple value:",output2);