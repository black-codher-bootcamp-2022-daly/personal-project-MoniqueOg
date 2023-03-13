


const accessibilityBtn = document.getElementById("accessibility-btn");
const accessibilityOverlay = document.getElementById("accessibility-overlay");


accessibilityBtn.addEventListener("click", () => {
   
    if (accessibilityOverlay.getAttribute("aria-hidden") === "true") {
        accessibilityOverlay.style.display = "flex";
        accessibilityOverlay.setAttribute("aria-hidden", "false");
    } else {
        accessibilityOverlay.style.display = "none";
        accessibilityOverlay.setAttribute("aria-hidden", "true");
    }
});


const colorOptions = document.querySelectorAll(".color-option");
colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.body.style.backgroundColor = option.style.backgroundColor;
    });
});


const fontOptions = document.querySelectorAll(".font-option");
fontOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.body.style.fontFamily = option.style.fontFamily;
    });
});

const Accessibility = (props) => {
    return (
        <div>
            <button id="accessibility-btn" aria-label="Accessibility options">Accessibility</button>

            <div id="accessibility-overlay" aria-hidden="true">
                <div id="accessibility-options">
                    <div className="color-option" id="color-blind-1"></div>
                    <div className="color-option" id="color-blind-2"></div>
                    <div className="color-option" id="color-blind-3"></div>
                </div>
            </div>
        </div>
    )
}

export default function Accessibility()