// Select the required HTML elements
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Original values for the reset function
const originalHeading = "Welcome to My Webpage!";
const originalBackground = "#f2f2f2";

// Event handler for the greeting button
function handleGreetingClick() {
    const name = nameInput.value.trim();

    if (name === "") {
        mainHeading.textContent = "Please enter your name.";
        messageArea.textContent = "You need to enter your name first.";
    } else {
        mainHeading.textContent = `Hello, ${name}!`;
        messageArea.textContent = "Greeting displayed successfully.";
    }

    console.log("Greeting displayed.");
}

// Event handler for the background button
function handleBackgroundClick() {
    pageContainer.style.backgroundColor = "#e0f7fa";
    document.body.style.backgroundColor = "#b2ebf2";

    messageArea.textContent = "The background color was changed.";

    console.log("Background color changed.");
}

// Event handler for the reset button
function handleResetClick() {
    mainHeading.textContent = originalHeading;
    nameInput.value = "";
    document.body.style.backgroundColor = originalBackground;
    pageContainer.style.backgroundColor = "white";
    messageArea.textContent = "";

    console.log("Website reset.");
}

// Event handler for the input event
function handleInput() {
    const currentText = nameInput.value;

    if (currentText === "") {
        messageArea.textContent = "";
    } else {
        messageArea.textContent = `You are typing: ${currentText}`;
    }

    console.log("Text input:", currentText);
}

// Event handler for the mouseover event
function handleGreetingMouseOver() {
    console.log("Mouse hover detected on greeting button.");
}

// Event listeners
greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);
nameInput.addEventListener("input", handleInput);
greetingButton.addEventListener("mouseover", handleGreetingMouseOver);