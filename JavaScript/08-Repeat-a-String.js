

// REPEAT A STRING REPEAT A STRING
// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
  // repeat after me
  var response = "";
  if(num>0) {
    for(var i=0;i<num;i++) {
      response += str
    }
  }
  return response;
}

repeat('abc', 3);

// TESTING
// repeat("*", 3) should return "***".
// repeat("abc", 3) should return "abcabcabc".
// repeat("abc", 4) should return "abcabcabcabc".
// repeat("abc", 1) should return "abc".
// repeat("*", 8) should return "********".
// repeat("abc", -2) should return "".