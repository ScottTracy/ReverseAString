"use strict"
function reverseAstring() {


  let reverseString = ""
  let originalString = prompt("Enter a string", "(enter here)");
  
  for (var i = originalString.length - 1; i >= 0; i--) {
	reverseString += originalString[i];
  }
  alert(reverseString);

 }
reverseAstring()