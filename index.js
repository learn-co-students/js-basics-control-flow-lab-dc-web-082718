// Write your code in this file!
function scuberGreetingForFeet(number)
{
  if (number <= 400)
  {
    return 'This one is on me!'
  }
  else if ((number < 2500) && (number > 2000))
  {
    return 'I will gladly take your thirty bucks.'
  }
  else if (number > 2500)
  {
    return 'No can do.'
  }
}

function ternaryCheckCity(city)
{
  let charge = ''
  city === 'NYC' ? (charge = 'Ok, sounds good.'):(charge = 'No go.');
  return charge
}

function switchOnCharmFromTip(tip)
{
  let response = '';
  switch (tip)
  {
    case 'generous': response = "Thank you so much."
      break;
    case 'not as generous': response = "Thank you."
      break;
    default: response = 'Bye.';
  }

  return response;
}
