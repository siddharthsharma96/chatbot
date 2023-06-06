function sanitizeInput(input) {
  // Sanitize user input
  return input.trim();
}

function encodeOutput(output) {
  // Encode user-generated content for safe display
  return encodeURIComponent(output);
}

const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("user-input");
const messageContainer = document.getElementById("messageContainer");

messageForm.addEventListener("submit", sendMessage);

function sendMessage(e) {
  e.preventDefault();

  // Retrieve user input
  const userInput = messageInput.value.trim();

  if (userInput !== "") {
    // Sanitize and encode user input
    const sanitizedInput = sanitizeInput(userInput);
    const encodedInput = encodeOutput(sanitizedInput);

    // Send encoded input to the server or process it further
    // ...
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = sanitizedInput;

    messageContainer.appendChild(messageElement);

    // Clear the input field
    messageInput.value = "";
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
