/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  if string < "12:00" {
    return "Good Morning";
  else if string >= "12:00" && string <= "17:00" {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
