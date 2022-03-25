//LAB 9-DATA STORAGE: PRODUCTS PAGE
// alert("products");//DELETE AFTER CONFIRMING CONNECTION

var storedF_name = localStorage.getItem("f_name");
  var storedF_color = localStorage.getItem("f_color");
  
  if (storedF_name === null || storedF_name.trim() === "") {
    newMsgBox.innerHTML = "Welcome!";
  } else {
    newMsgBox.innerHTML = "Welcome! " + storedF_name;
    document.body.style.backgroundColor = storedF_color;
  }
