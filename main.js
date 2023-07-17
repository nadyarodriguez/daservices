const button = document.getElementById("sl_button");

button.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById(
    "sl_output"
  ).innerHTML = `1. What is my social audience? (e.g. who they follow, demographics, etc.)
    <br>
  2. What needs/wants are patients expressing on social?<br>
  3. Who are the social influencers? <br>
  4. How was my content perceived? <br>
  5. What type of content will create the best impact?`;
});
// button.addEventListener("change", function () {
//   const button = document.getElementById("sl_button");
//   console.log("Text to be printed.");
//   if (button.checked == true) {
//     document.getElementById(
//       "sl_output"
//     ).innerHTML = `Questions to consider:<br> <br>1. What is my social audience? (e.g. who they follow, demographics, etc.)
//       <br>
//     2. What needs/wants are patients expressing on social?`;
//   } else {
//     document.getElementById("sl_output").innerHTML = "none";
//   }
// });

const button2 = document.getElementById("sld_button");

button2.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById("sld_output").innerHTML = `Description of the services
    <br>`;
});
