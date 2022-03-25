//LAB 9-DATA STORAGE: INDEX PAGE
// alert("home");//DELETE AFTER CONFIRMING CONNECTION

// 1. accessing form
// 2. getting user inputs
// 3. on click save not refresing the page
// 4. on click save ... saving data into localStorage
// ----- ending form processing------
// 5. accessing this data and applying changes to web page using dom : background color and welcome message
// 5. on click delete data ... removing data from local storage

// getting and handling form
const infoForm = document.forms.infoForm;
const newMsgBox = document.getElementById("newMsgBox");
const btnDel = document.getElementById("btnDel");

infoForm.onsubmit = processForm;

function processForm() {
  // getting values
  var f_name = infoForm.f_name.value;
  var f_color = infoForm.f_color.value;
  // console.log("name is :"+f_name+" color is :"+f_color);

  // storing data in localstorage

  localStorage.setItem("f_name", f_name);
  localStorage.setItem("f_color", f_color);
}

// accessing localstorage and using DOM
var storedF_name = localStorage.getItem("f_name");
var storedF_color = localStorage.getItem("f_color");

if (storedF_name === null || storedF_name.trim() === "") {
  newMsgBox.innerHTML = "Welcome!";
} else {
  newMsgBox.innerHTML = "Welcome! " + storedF_name;
  document.body.style.backgroundColor = storedF_color;
}

// handling delete functionality
btnDel.onclick = clearInfo;

function clearInfo() {
  localStorage.removeItem("f_name");
  localStorage.removeItem("f_color");
  window.location.reload();
}
