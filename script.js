// Voice Recognition Setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

// DOM Elements
const inputNumber = document.getElementById("inputNumber");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Flag to control voice recognition
let voiceRecognitionActive = false;

// Event Listeners
calculateBtn.addEventListener("click", calculateSquareRoot);
recognition.addEventListener("result", handleVoiceInput);

// Calculate Square Root
function calculateSquareRoot() {
  const number = parseFloat(inputNumber.value);
  if (isNaN(number)) {
    result.textContent = "Invalid input. Please enter a valid number.";
    return;
  }
  const squareRoot = Math.sqrt(number);
  result.textContent = `Square root of ${number} is ${squareRoot.toFixed(2)}`;
}

// Voice Recognition Handler
function handleVoiceInput(event) {
  if (!voiceRecognitionActive) {
    return;
  }

  const voiceInput = event.results[0][0].transcript;
  inputNumber.value = voiceInput;
  calculateSquareRoot();
}

// Start Voice Recognition
function startVoiceRecognition() {
  voiceRecognitionActive = true;
  recognition.start();
}

// Stop Voice Recognition
function stopVoiceRecognition() {
  voiceRecognitionActive = false;
  recognition.stop();
}

// Button event listeners
calculateBtn.addEventListener("click", calculateSquareRoot);
startBtn.addEventListener("click", startVoiceRecognition);
stopBtn.addEventListener("click", stopVoiceRecognition);

// Start Voice Recognition initially
startVoiceRecognition();
