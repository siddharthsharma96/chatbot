const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messageContainer = document.getElementById("messageContainer");

messageForm.addEventListener("submit", sendMessage);

function sendMessage(e) {
  e.preventDefault();

  const message = messageInput.value.trim();

  if (message !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;

    messageContainer.appendChild(messageElement);

    messageInput.value = "";
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
