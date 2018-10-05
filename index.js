// Write your code in this file!

function scuberGreetingForFeet(rideLength) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (rideLength < 200){
    return 'This one is on me!'
  }
  else if (rideLength > 2000 && rideLength <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  if (city == "NYC"){
    return 'Ok, sounds good.'
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  if (tip == "generous"){
    return "Thank you so much."
  }
  else if (tip == "not as generous") {
    return "Thank you."
  }
  else{
    return "Bye."
  }
}
