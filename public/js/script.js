// Define functions to perform actions on the DOM
function displayAlert(message) {
  const alertBox = document.querySelector('#alert-box');
  alertBox.innerText = message;
  alertBox.style.display = 'block';
}

function hideAlert() {
  const alertBox = document.querySelector('#alert-box');
  alertBox.style.display = 'none';
}

function showLoader() {
  const loader = document.querySelector('#loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('#loader');
  loader.style.display = 'none';
}

// Define event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Hide the alert box and loader by default
  hideAlert();
  hideLoader();
});

// Handle form submission
const form = document.querySelector('#my-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Display the loader
  showLoader();

  // Send a POST request to the server
  const formData = new FormData(form);
  const response = await fetch('/api/data', {
    method: 'POST',
    body: formData,
  });

  // Hide the loader
  hideLoader();

  if (response.ok) {
    // Show a success message
    displayAlert('Data has been saved successfully!');
  } else {
    // Show an error message
    const error = await response.json();
    displayAlert(error.message);
  }
});
