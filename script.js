// Target the form and message elements
const form = document.getElementById("passwordForm");
const messageError = document.getElementById("error");

// Listen for the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value from the input field
  const userInput = document.getElementById("password").value.trim();

  // Determine the message to display
  if (userInput.toLowerCase() === "branding") {
    messageError.textContent =
      "Great! You found the password, congratulations 🎉";
    messageError.style.color = "green";
  } else if (userInput === "") {
    messageError.textContent = "Please enter a response.";
    messageError.style.color = "red";
  } else {
    messageError.textContent = `You entered: ${userInput} but this password is incorrect. Please try again.`;
    messageError.style.color = "red";
  }

  // Reload the page after displaying the message
  setTimeout(() => {
    location.reload();
  }, 3000); // Delay to give the user time to see the message
});
