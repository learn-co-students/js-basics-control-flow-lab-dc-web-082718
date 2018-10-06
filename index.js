// Write your code in this file!
function scuberGreetingForFeet(value) {

let say

if (value <= 400) {
    say = "This one is on me!"
  }
else if (value > 2500) {
    say = 'No can do.'
    }
else if (value > 2000) {
    say = 'I will gladly take your thirty bucks.'
  }
  return say
}


function ternaryCheckCity(city){

let say

if (city==="NYC"){
  say = 'Ok, sounds good.'
}
else if (city !== "NYC") {
  say = 'No go.'
}
return say
}

function switchOnCharmFromTip(tip){

  let say

  if (tip === 'generous') {
    say = 'Thank you so much.'
  }
  else if (tip === 'not as generous') {
    say = 'Thank you.'
  }
  else {
    say = 'Bye.'
  }
return say
}
