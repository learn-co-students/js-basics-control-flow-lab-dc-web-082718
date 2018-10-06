// Write your code in this file!

function scuberGreetingForFeet(ride) {
  let results
  if(ride <= 400) {
    results = 'This one is on me!'
  }

  else if (ride > 2000 && ride < 2500) {
    results = "I will gladly take your thirty bucks."
  }

  else if(ride > 2500) {
    results = "No can do."
  };

  return results
};

function ternaryCheckCity(city) {
  let answer;

  city === "NYC" ? answer = "Ok, sounds good." : answer = "No go."

  return answer
}

function switchOnCharmFromTip(tip){
  let answer

  if (tip === "generous"){
    answer = "Thank you so much."
  }

  else if (tip === "not as generous"){
    answer = "Thank you."
  }

  else {
    answer = "Bye."
  }

  return answer
}
