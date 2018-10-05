// Write your code in this file!
  function scuberGreetingForFeet(somevalue) {
    let greeting = '';
    if (somevalue <= 400) {
      return greeting = 'This one is on me!';
    }
    else if (somevalue > 2500) {
      return greeting = 'No can do.'
    }
    else {
      return greeting = 'I will gladly take your thirty bucks.'
    }
  }

  function ternaryCheckCity(city) {
    const someCity = 'NYC'
    let message;
    city === someCity ? (message = 'Ok, sounds good.') : (message ='No go.')
    return message
  }

  function switchOnCharmFromTip(tip) {
    let message;

    switch (tip) {
      case 'generous':
        message = 'Thank you so much.';
        return message
      case 'not as generous':
        message = 'Thank you.';
        return message
      default:
        message = 'Bye.'
        return message
    }
  }
