var fullName = prompt("What is your name?");

function askName() {
    var greetingDiv = document.getElementById('greeting');
    greetingDiv.innerHTML = 'Hello, ' + fullName;
}


window.onload = askName;


document.getElementById("getStartedBtn").addEventListener("click", function() {
    let isValid = false;
    let normalizedInput;

    // Loop until the user provides valid input
    while (!isValid) {
        var userInput = prompt("What kind of cleaning agents do you need? (Bathroom Cleaners, Stain and Deposit Removers, Special Surface Cleaners, General Surface Cleaners)");

        // Convert input to lowercase to ignore case sensitivity
        normalizedInput = userInput.toLowerCase();

        // Check if the input is valid
        if (normalizedInput === "bathroom cleaners" || 
            normalizedInput === "stain and deposit removers" || 
            normalizedInput === "special surface cleaners" || 
            normalizedInput === "general surface cleaners") {
            isValid = true;
        } else {
            alert("Invalid choice! Please enter one of the specified categories.");
        }
    }

    // Redirect based on the valid input
    if (normalizedInput === "bathroom cleaners") {
        window.location.href = "Bathroom Cleaners.html";
    } else if (normalizedInput === "stain and deposit removers") {
        window.location.href = "Stain and Deposit Removers.html";
    } else if (normalizedInput === "special surface cleaners") {
        window.location.href = "Special Surface Cleaners.html";
    } else if (normalizedInput === "general surface cleaners") {
        window.location.href = "General Surface Cleaners.html";
    }
});
