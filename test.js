console.log("--------------");
console.log("Hi there!");
console.log("--------------");

let button = document.getElementById("btn_id1");

button.addEventListener("click", showAlert);

// Function to display an alert
function showAlert() {
    let newWin = window.open("", "My Popup", "width=300,height=200");
    //newWin.document.write("<h1>Hello, world!</h1>");
//    console.error("Hello! This is a basic JavaScript alert!!!!");
}

// Call the function
// showAlert();
