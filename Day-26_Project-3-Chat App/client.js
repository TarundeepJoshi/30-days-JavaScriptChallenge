let username;
let socket;

// Function to join the chat
function joinChat() {
  const usernameInput = document.getElementById("usernameInput");
  username = usernameInput.value.trim();

  if (username) {
    // Hide the login container and show the chat container
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("chatContainer").style.display = "block";

    // Set the username in the header
    document.getElementById("name").textContent = username;

    // Initialize WebSocket connection
    connectWebSocket();
  }
}

// Function to establish a WebSocket connection
function connectWebSocket() {
  socket = new WebSocket("ws://localhost:3000");

  socket.addEventListener("open", () => {
    console.log("Connected to the WebSocket server");
  });

  socket.addEventListener("message", (event) => {
    console.log("Message from server:", event.data);
    const { sender, message } = JSON.parse(event.data);
    // Only display the message if it's not from the current user
    if (sender !== username) {
      displayMessage(message, sender);
    }
  });

  socket.addEventListener("close", () => {
    console.log("Disconnected from the WebSocket server");
  });

  // Attach the click event listener to the send button
  document.getElementById("circle").addEventListener("click", () => {
    sendMessage();
  });

  // Attach the keydown event listener to the input field
  document.getElementById("val").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default behavior of Enter key
      sendMessage();
    }
  });
}

// Function to send a message through the WebSocket
function sendMessage() {
  const messageInput = document.getElementById("val");
  const message = messageInput.value.trim();

  if (message) {
    const messageData = JSON.stringify({ sender: username, message });

    socket.send(messageData);
    displayMessage(message, username);

    // Clear the input field
    messageInput.value = "";
  }
}

// Function to display a message in the chat UI
function displayMessage(message, sender) {
  const ap = document.getElementById("ap");
  const messageElement = document.createElement("div");

  // Apply styles based on whether the message is sent by the user or received
  if (sender === username) {
    messageElement.classList.add("message", "sent");
  } else {
    messageElement.classList.add("message", "received");
  }

  // Create and append username and message text elements
  const usernameElement = document.createElement("span");
  usernameElement.classList.add("username");
  usernameElement.textContent = sender;

  const textElement = document.createElement("span");
  textElement.textContent = message;

  messageElement.appendChild(usernameElement);
  messageElement.appendChild(textElement);

  ap.appendChild(messageElement);
  ap.scrollTop = ap.scrollHeight; // Scroll to the bottom
}

// Attach the joinChat function to the login button
document.getElementById("loginButton").addEventListener("click", joinChat);
