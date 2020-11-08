document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  }, false);
  
});

// document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";