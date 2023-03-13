// Get the current and previous volumes of Bitcoin
const currentVolume = 10000; // Replace with actual volume data
const previousVolume = 2800; // Replace with actual volume data

// Calculate the volume change percentage
const volumeChange = ((currentVolume - previousVolume) / previousVolume) * 100;

// Get the volume change element
const volumeChangeElement = document.getElementById("volume-change");

// Set the text content of the volume change element based on the change percentage
if (volumeChange > 0) {
  volumeChangeElement.textContent = `+${volumeChange.toFixed(2)}% gain`;
  volumeChangeElement.style.color = "green";
} else if (volumeChange < 0) {
  volumeChangeElement.textContent = `${volumeChange.toFixed(2)}% loss`;
  volumeChangeElement.style.color = "red";
} else {
  volumeChangeElement.textContent = "No change";
}

