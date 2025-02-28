function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    // Special case when the input is the exact string "Let's have dinner together!"
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
    
    // If the string is in all uppercase, return a different response
    else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
    
    // For any other case (i.e., lowercase or mixed case), return a default response
    else {
      return "I can't hear you!";
    }
  }
  