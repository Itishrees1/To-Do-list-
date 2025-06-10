const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item element
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a 'delete' button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the 'x' character
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = "";
    saveData(); 
}

// Add an event listener to the input box for the "Enter" key
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addTask();
    }
});


// Event listener for the list container (for completing and deleting tasks)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
       
        e.target.classList.toggle("checked");
        saveData(); // Save the state after toggling
    } else if (e.target.tagName === "SPAN") {
       
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);

// Function to save data to localStorage
function saveData() {
    
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from localStorage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Show the tasks when the page is first loaded
showTask();