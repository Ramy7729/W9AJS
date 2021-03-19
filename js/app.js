// Arrays created for loop.
var userAges = [1, 7, 17, 27, 77, 87, 97];
var subStatus = [true, true, true, true, true, true, false]; 

// Making the for loop dynamic by using the length property for the array.
for(var counter=0; counter < userAges.length; counter++) {
    
    // Replacing variables from the old assignment with newly created arrays: userAges and subStatus.
    if (userAges[counter] < 18 && subStatus[counter] === false) {
        console.log("the user is younger than 18 and not subscribed");
    } else if (userAges[counter] >= 18 && subStatus[counter] === false) {
        console.log("the user is 18 and older and not subscribed");
    } else if (userAges[counter] < 18 && subStatus[counter] === true) {
        console.log("the user is younger than 18 and is subscribed");
    } else if (userAges[counter] >= 18 && subStatus[counter] === true) {
        console.log("the user is 18 and older and is subscribed");
    } else {
        console.log("it is I, Barney the Dinosaur, and I am a primordial being");
    }
}


