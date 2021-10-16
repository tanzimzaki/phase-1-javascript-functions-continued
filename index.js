function saturdayFun (message1) {
    if (message1 === undefined) {
        message1 = "This Saturday, I want to roller-skate!";
        return message1; 
    }
    else if (message1 === true) {
      message1 = "This Saturday, I want to bathe my dog!";
      return message1;
    }
}

function mondayWork (message2) {
    if (message2 === undefined) {
        message2 = "This Monday, I will go to the office.";
        return message2; 
    }
    else if (message2 === true) {
        message2 = "This Monday, I will work from home.";
        return message2;
      }
}




function wrapAdjective(msg1="You are *a hard worker*!") {
  return function(lang="Special") {
    return `${msg1} ${lang};`
  }
}

function wrapAdjective(msg2="You are ||a dedicated programmer||!") {
  return function(lang="Special") {
    return `${msg2} ${lang};`
  }
}

wrapAdjective(msg1)(msg2)




  





