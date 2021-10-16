// make sure our arguments are named reasonably
function saturdayFunFix(message) {
  if (message === undefined) {
    // in this step we are re-assigning the inbound argument
    message = "This Saturday, I want to roller-skate!";
    // and then returning the re-assigned arg
    return message;
    // is there any reason to re-assign this?
    // something for the future...
    // args don't usually get re-assigned.
  }
  // usually we try and create an if statement to work with the True assessment
  // so the first if statment tested if somethign wasn't true
  // and could be acheived in an easier to read way
  // If you think of strict equality here, we are testing: that message is true and that the type is boolean
  else if (message === true) {
    message = "This Saturday, I want to bathe my dog!";
    return message;
  }
}

function saturdayFunFixed(message) {
  if (message) {
    return "This Saturday, I want to bathe my dog!";
  } else {
    return "This Saturday, I want to roller-skate!";
  }
}

// I was thinking we were supposed to provide default args.
// I assume further down it wants a way to provide a default argument if one isn't given
// which will remove that if / else statement
// But this task is really tricky to do that as we want to return a particular message
// This is real gross but this is kind of what I was expecting.
function saturdayFunFixedLong(
  message = "This Saturday, I want to roller-skate!"
) {
  if (message === "This Saturday, I want to roller-skate!") {
    return message;
  } else {
    return "This Saturday, I want to bathe my dog!";
  }
}

// Try this one yourself
function mondayWork(message2) {
  if (message2 === undefined) {
    message2 = "This Monday, I will go to the office.";
    return message2;
  } else if (message2 === true) {
    message2 = "This Monday, I will work from home.";
    return message2;
  }
}

function wrapAdjective(msg1 = "You are *a hard worker*!") {
  return function (lang = "Special") {
    return `${msg1} ${lang};`;
  };
}

function wrapAdjective(msg2 = "You are ||a dedicated programmer||!") {
  return function (lang = "Special") {
    return `${msg2} ${lang};`;
  };
}

// Look you were on the right track, lets blame poor explanation by the module.
function wrapAdjectiveFixed(visualFlair = "*") {
  return function (adjective = "special") {
    return "You are " + visualFlair + adjective + visualFlair + "!";
  };
}
