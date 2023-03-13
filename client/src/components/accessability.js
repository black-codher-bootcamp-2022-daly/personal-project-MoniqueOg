
const Accessibility = () => {
// Get the accessibility button and overlay elements
const accessibilityBtn = document.getElementById("accessibility-btn");
const accessibilityOverlay = document.getElementById("accessibility-overlay");

// Add a click event listener to the accessibility button
accessibilityBtn.addEventListener("click", () => {
    // Show or hide the accessibility overlay based on its current state
    if (accessibilityOverlay.getAttribute("aria-hidden") === "true") {
        accessibilityOverlay.style.display = "flex";
        accessibilityOverlay.setAttribute("aria-hidden", "false");
    } else {
        accessibilityOverlay.style.display = "none";
        accessibilityOverlay.setAttribute("aria-hidden", "true");
    }
});

// Add a click event listener to each color option to change the page's background color
const colorOptions = document.querySelectorAll(".color-option");
colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.body.style.backgroundColor = option.style.backgroundColor;
    });
});

// Add a click event listener to each font option to change the page's font
const fontOptions = document.querySelectorAll(".font-option");
fontOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.body.style.fontFamily = option.style.fontFamily;
    });
});
};

export default function Accessibility()