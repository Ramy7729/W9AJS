var age = "banana";
var is_subscribed = true;

if (age < 18 && is_subscribed === false) {
    console.log("the user is younger than 18 and not subscribed");
} else if (age >= 18 && is_subscribed === false) {
    console.log("the user is 18 and older and not subscribed");
} else if (age < 18 && is_subscribed === true) {
    console.log("the user is younger than 18 and is subscribed");
} else if (age >= 18 && is_subscribed === true) {
    console.log("the user is 18 and older and is subscribed");
} else {
    console.log("it is I, Barney the Dinosaur, and I am a primordial being");
}
